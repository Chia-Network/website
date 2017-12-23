[![ISC License](https://img.shields.io/npm/l/make-plural.svg)](http://en.wikipedia.org/wiki/ISC_license)
[![Build Status](https://travis-ci.org/eemeli/IntlPluralRules.svg?branch=master)](https://travis-ci.org/eemeli/IntlPluralRules)


Intl.PluralRules
================

A polyfill for the upcoming [Intl.PluralRules](https://github.com/caridy/intl-plural-rules-spec)
specification.


## Installation

```
npm install intl-pluralrules
```
_or_
```
git clone https://github.com/eemeli/IntlPluralRules.git
cd IntlPluralRules
npm install
make
```
_or_ download the latest release from
[here](https://github.com/eemeli/IntlPluralRules/releases/latest)


## Usage

The package's `polyfill.js` contains an UMD wrapper, so you can include or
require it pretty much anywhere. When included, it'll set `Intl.PluralRules`
according to the spec.

This version follows the Sept 2015 spec, with fixes for the problems raised in
[issue #1](https://github.com/caridy/intl-plural-rules-spec/issues/1): input is
not forced to Number, and available locales take into account `options.style`.
