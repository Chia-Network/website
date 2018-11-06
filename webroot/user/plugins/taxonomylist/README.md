# Grav Taxonomy List Plugin

`Taxonomylist` is a [Grav](http://github.com/getgrav/grav) plugin that generates a list of linked tags collected throughout	the site.

![Taxonomy List](assets/readme_1.png)

# Installation

Installing the Taxonomy List plugin can be done in one of two ways. Our GPM (Grav Package Manager) installation method enables you to quickly and easily install the plugin with a simple terminal command, while the manual method enables you to do so via a zip file.

## GPM Installation (Preferred)

The simplest way to install this plugin is via the [Grav Package Manager (GPM)](http://learn.getgrav.org/advanced/grav-gpm) through your system's Terminal (also called the command line).  From the root of your Grav install type:

    bin/gpm install taxonomylist

This will install the Taxonomy List plugin into your `/user/plugins` directory within Grav. Its files can be found under `/your/site/grav/user/plugins/taxonomylist`.

## Manual Installation

To install this plugin, just download the zip version of this repository and unzip it under `/your/site/grav/user/plugins`. Then, rename the folder to `taxonomylist`. You can find these files either on [GitHub](https://github.com/getgrav/grav-plugin-taxonomylist) or via [GetGrav.org](http://getgrav.org/downloads/plugins#extras).

You should now have all the plugin files under

    /your/site/grav/user/plugins/taxonomylist
	
>> NOTE: This plugin is a modular component for Grav which requires [Grav](http://github.com/getgrav/grav), the [Error](https://github.com/getgrav/grav-plugin-error) and [Problems](https://github.com/getgrav/grav-plugin-problems) plugins, and a theme to be installed in order to operate.

# Usage

To use `taxonomylist` you need to set your pages header with a  taxonomy category and tag:

```yaml
taxonomy:
    category: blog
    tag: [tag1, tag2]
```

## Simple Include

The plugin provides a Twig template that you need to include in your theme. Something like:

```twig
{% include 'partials/taxonomylist.html.twig' with {base_url: my_url, taxonomy: 'tag'} %}
```

Where `my_url` is the URL to link to where the collection can be filtered (e.g. `/blog`) and the `taxonomy` points to a specific taxonomy type to display (e.g. `tag`). This will display all tags throughout your site

## Child-only Include

You can also include pass an optional parameter that will show taxonomy for child-pages only:

```twig
{% include 'partials/taxonomylist.html.twig' with {base_url: my_url, taxonomy: 'tag', children_only: true} %}
```

> NOTE: If you want to see this plugin in action, have a look at our [Blog Site Skeleton](http://github.com/grav/grav-skeleton-blog-site/archive/master.zip)



# Config Defaults
```
route: '/blog'
```
