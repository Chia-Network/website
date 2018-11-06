---
title: Blog
blog_url: blog
body_classes: header-image fullwidth

sitemap:
    changefreq: monthly
    priority: 1.03

content:
    items: @self.children
    order:
        by: date
        dir: desc
    limit: 5
    pagination: true

feed:
    description: Sample Blog Description
    limit: 10

pagination: true
---

# My Gravtastic Blog
## A tale of **awesomazing** adventures
