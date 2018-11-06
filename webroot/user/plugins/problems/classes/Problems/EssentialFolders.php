<?php
namespace Grav\Plugin\Problems;

use Grav\Plugin\Problems\Base\Problem;

class EssentialFolders extends Problem
{
    public function __construct()
    {
        $this->id = 'Essential Folders';
        $this->class = get_class($this);
        $this->order = 100;
        $this->level = Problem::LEVEL_CRITICAL;
        $this->status = false;
        $this->help = 'https://learn.getgrav.org/basics/folder-structure';
    }

    public function process()
    {
        $essential_folders = [
            'backup' => true,
            'cache' => true,
            'logs' => true,
            'images' => true,
            'assets' => true,
            'system' => false,
            'user/data' => true,
            'user/pages' => false,
            'user/config' => false,
            'user/plugins/error' => false,
            'user/plugins' => false,
            'user/themes' => false,
            'vendor' => false,
            'tmp' => true,
        ];

        // Check for essential files & perms
        $file_errors = [];
        $file_success = [];

        foreach ($essential_folders as $file => $check_writable) {
            $file_path = ROOT_DIR . $file;

            if (!file_exists($file_path)) {
                $file_errors[$file_path] = 'does not exist';
            } elseif ($check_writable && !is_writable($file_path)) {
                $file_errors[$file_path] = 'exists but is <strong>not writeable</strong>';
            } else {
                $file_success[$file_path] = 'exists and is writable';
            }
        }

        if (empty($file_errors)) {
            $this->status = true;
            $this->msg = 'All folders look good!';
        } else {
            $this->status = false;
            $this->msg = 'There were problems with required folders:';
        }

        $this->details = ['errors' => $file_errors, 'success' => $file_success];

        return $this;
    }
}