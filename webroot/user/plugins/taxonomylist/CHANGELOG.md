# v1.3.3
## 08/21/2018

1. [](#bugfix)
    * Reinstated caching that was broken from previous PR [#23](https://github.com/getgrav/grav-plugin-taxonomylist/issues/23)

# v1.3.2
## 05/21/2017

1. [](#improved)
    * Removed Grav trait in favor of `Grav::instance()`

# v1.3.1
## 11/02/2017

1. [](#bugfix)
    * Don't need to lowercase the taxonomy now we have removed `case_insensitive_urls` option in Grav core

# v1.3.0
## 10/31/2017

1. [](#new)
    * Added ability to show tags of the child pages of the current page [#17](https://github.com/getgrav/grav-plugin-taxonomylist/pull/17)
1. [](#improved)
    * Improved child-pages logic to use the same include, just pass an optional `children_only` param
    * Lowercase all tags due to changes in Grav 1.3.8 where URL params are lowercase [#18](https://github.com/getgrav/grav-plugin-taxonomylist/issues/18) 

# v1.2.7
## 01/06/2016

2. [](#improved)
    * Removed extraneous encoding

# v1.2.6
## 10/07/2015

2. [](#improved)
    * Added `active` class on active taxonomies

# v1.2.5
## 07/19/2015

2. [](#improved)
    * Set the taxonomy type from the taxonomy being passed in

# v1.2.4
## 02/19/2015

2. [](#improved)
    * Implemented new `param_sep` variable from Grav 0.9.18

# v1.2.3
## 02/05/2015

2. [](#improved)
    * Added support for HHVM

# v1.2.2
## 01/09/2015

2. [](#improved)
    * NOTE: BREAKING CHANGE: Moved templates into `partials/` subfolder for consistency.

# v1.2.1
## 01/07/2015

1. [](#bugfix)
    * Support for numeric taxonomy values

# v1.2.0
## 11/30/2014

1. [](#new)
    * ChangeLog started...
