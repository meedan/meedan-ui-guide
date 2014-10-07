# Checkdesk Theme README

Cross-browser, bidirectional and responsive HTML/JS/CSS components.

We use the [Compass] and [Susy] ruby gems with [Guard] to help manage it all.

To compile the Sass stylesheets into CSS, install the gems as detailed in the following section of this file.

## We use bundler to manage gems

First, [install bundler](http://bundler.io/ "Bundler: The best way to manage a Ruby application's gems").

Then run:`bundle install` in the project root.

If all goes well, you will be able to execute each of the relevant commands (below) like this: `bundle exec $command` where `$command` is a ruby-based executable.

## Common commands

The main command you need to use to compile the stylesheets is: `bundle exec guard`

That will take over your terminal and watch for changes. 

If you want to just compile the sass once for production:`bundle exec compass compile -e production --force`

## Using Guard to manage it all

Better yet, if you have mastered the above setup, you can try to run guard and livereload:`bundle exec guard`

If it works, it will take over your console show output like this:  

```
18:52:58 - INFO - Guard is now watching at '/Users/chris/git/meedan-checkdesk'
[1] guard(main)>
18:52:58 - INFO - Run all
unchanged drupal/sites/all/themes/checkdesk/assets/sass/print.scss
identical drupal/sites/all/themes/checkdesk/assets/css/style-rtl.css
identical drupal/sites/all/themes/checkdesk/assets/css/style.css
18:53:01 - INFO - Uglified drupal/sites/all/modules/meedan/meedan_iframes/js/meedan_iframes.parent.js to drupal/sites/all/modules/meedan/meedan_iframes/js/meedan_iframes.parent.min.js

18:53:04 - INFO - Uglified drupal/sites/all/modules/meedan/meedan_iframes/js/meedan_iframes.parent.js to drupal/sites/all/modules/meedan/meedan_iframes/js/meedan_iframes.parent.min.js

18:53:13 - INFO - Reloading browser: drupal/sites/all/modules/meedan/meedan_iframes/js/meedan_iframes.parent.min.js
unchanged drupal/sites/all/themes/checkdesk/assets/sass/print.scss
unchanged drupal/sites/all/themes/checkdesk/assets/sass/style-rtl.scss
unchanged drupal/sites/all/themes/checkdesk/assets/sass/style.scss
unchanged drupal/sites/all/themes/checkdesk/assets/sass/print.scss
unchanged drupal/sites/all/themes/checkdesk/assets/sass/style-rtl.scss
unchanged drupal/sites/all/themes/checkdesk/assets/sass/style.scss
unchanged drupal/sites/all/themes/checkdesk/assets/sass/print.scss
```

## Example terminal layout

A good workflow is to start this process in a terminal window that you can see as you work. 

Guard runs in the bundle context and makes sure that your stylesheets are continuously evaluated (as configured in a compass config.rb).

![Example Terminal Layout](https://www.evernote.com/shard/s3/sh/45b84581-f832-4f35-8abc-51e44cc4e8a2/41dd43cbcc842cf0d86db26ff4bfd9ab/deep/0/1.-chris@Meedanis-MacBook-Pro----git-meedan-checkdesk-%28zsh%29.png)

In iTerm 2, to split the terminal window do `cmd + shift + D` (new row) or `cmd + d` (new column).

- In one window, you run `bundle exec guard`
- In another, `git log `
- And `git commit` in another
- Lastly you have a workspace for anything else you need to do on the command line. Remember: if you use a ruby gem executable like guard or compass, make sure you are on the right version by using `bundle exec` before the command.


## Installing the Livereload browser plugin

To utilize the livereload notification being sent from your stack, you will need a browser plugin that can "listen" and take over the appropriate action, namely, to reload the browser or the stylesheet.

If you have livereload properly configured it will reload only the stylesheet, and prevent extra calls to the database. (It is highly desirable to have rapid reload of the css without the database calls!)

Install the livereload browser extension for [Chrome](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en).

![Livereload browser extension configuration screenshot](https://www.evernote.com/shard/s3/sh/5637ed2d-13a4-4538-8c41-402b9ad7ff67/4a96d7cd0348b20986573b67969f5154/deep/0/Add-ons-Manager.png "Livereload saved my life.")

Use guard-livereload and guard-compass to start watching your stylesheets. Like the older `compass watch` command. It observes file system modification time and refreshes when you save the file. (This is also like the [grunt watch](https://github.com/gruntjs/grunt-contrib-watch "gruntjs/grunt-contrib-watch · GitHub") command). 

The Guardfile, usually located at the project root next to the compass config.rb file, is configured to watch the main Sass directory, `assets/scss` and refresh CSS files continuously in the `assets/css` directory.

See the [Compass documentation](http://compass-style.org/reference/compass/ "Compass Core Framework | Compass Documentation").
[Guard documentation](https://github.com/guard/guard "guard/guard · GitHub").

## Project structure

The project is structured as a centralized style.scss which uses `@import` to concatenate all our files (and resolve dependencies on `@mixins` `%placeholders` and `$variables` in the correct order).

Here is an overview of how it works. 

Note that the style-rtl.scss file imports the entire style.scss file and changes variables appropriately.

![Checkdesk Project Structure](https://www.evernote.com/shard/s3/sh/710ba72b-246a-49d4-b6eb-03b3c31c71bc/e4b336656508c77f841e7b2c8e2d344b/deep/0/Create-UML-diagrams-online-in-seconds,-no-special-tools-needed..png "Graph made with http://yuml.me")

PS: You can [edit this graph](http://yuml.me/edit/556f5e3b).

#### Annotated file system

- The primary stylesheet is style.scss
- /assets/scss/ renders into /assets/css/.
- The Compass configuration file is in config.rb (usually at the project root)
- per the standard [compass sass best practices](http://compass-style.org/help/tutorials/best_practices/ "Best practices | Compass Documentation") we keep our configuration in `_base.scss` file.

Here is the output from `tree "drupal/sites/all/themes/checkdesk"` with additional commentary on the structure.


        .
        ├── Guardfile
        ├── assets
        │   ├── css /////////////////////// The rendered CSS files output to browser.
        │   ├── style.scss
        │   ├── print.scss
        │   ├── style-rtl.scss
        ...
        │   ├── fonts
        │   │   ////////////// ... There are many fonts.
        ...
        │   ├── imgs
        │   │   ├── alpha.png
        │   │   //////////////  ... There are many images.
        ...
        │   └── js
        │       ├── checkdesk_inject_bootstrap.js
        │       ├── hacks.js
        │       ├── ie8.js
        │       ├── inline_errors.js
        │       ├── master.js
        │       ├── navigation.js
        │       ├── report.js
        │       ├── libs
        │       │   │   //////////////  many js libs, eg bootstrap, jquery
        ...
        ├── bower.json //////////////  New Bower section
        ├── bower_components
        │   ├── color-schemer
        │   ├── //////////////  other bower components are installed here
        ...
        ├── checkdesk.info ////////////// Drupal theme file
        ├── config.rb ////////////// Compass config file
        ├── favicon.ico
        ├── favicon@2x.ico
        ├── includes
        │   ├── checkdesk.inc
        │   ├── menu.inc
        │   └── theme.inc
        ├── misc
        │   └── throbber.gif -> ../assets/imgs/icons/loader_white.gif
        ├── sass ////////////// our sass project
        │   ├── README.md ////////////// the main theme readme 
        │   ├── bootstrap ////////////// our old trusty ctb-mixins
        │   │   ├── _buttons.scss
        │   │   ├── _forms.scss
        │   │   ├── _mixins.scss
        │   │   └── _navs.scss
        │   ├── checkdesk ////////////// styles that are checkdesk
        │   │   ├── components ////////////// checkdesk "components"
        │   │   │   ├── _alerts.scss
        │   │   │   ├── _bookmarklet.scss
        │   │   │   ├── _dropdowns.scss
        │   │   │   ├── _install_bookmarklet.scss
        │   │   │   ├── _l10n.scss
        │   │   │   ├── _liveblog.scss
        │   │   │   ├── _modals.scss
        │   │   │   ├── _navigation.scss
        │   │   │   ├── _navs.scss
        │   │   │   ├── _notifications.scss
        │   │   │   ├── _pagination.scss
        │   │   │   ├── _report.scss
        │   │   │   ├── _report_stream_filters.scss
        │   │   │   ├── _reports_stream.scss
        │   │   │   ├── _story.scss
        │   │   │   ├── _story_composer.scss
        │   │   │   ├── _story_update.scss
        │   │   │   ├── _tabs.scss
        │   │   │   ├── _tour.scss
        │   │   │   ├── _widgets.scss
        │   │   │   ├── navigation
        │   │   │   ├── story
        │   │   │   └── user ////////////// checkdesk users
        │   │   │       ├── _account.scss
        │   │   │       ├── _administer_users.scss
        │   │   │       ├── _profile.scss
        │   │   │       ├── _user.scss
        │   │   │       └── _user_account.scss
        │   │   ├── plugins ////////////// checkdesk 3rd party plugins
        │   │   │   ├── _facebook_comments.scss
        │   │   │   └── _livefyre.scss
        │   │   ├── sections ////////////// sections of the checkdesk app
        │   │   │   ├── _footer.scss
        │   │   │   ├── _partner_header.scss
        │   │   │   ├── _reports_page.scss
        │   │   │   └── _static.scss
        │   │   └── shared ////////////// shared scss across the entire app
        │   │       ├── _backgrounds.scss
        │   │       ├── _base.scss
        │   │       ├── _breakpoints.scss
        │   │       ├── _buttons.scss
        │   │       ├── _colors.scss
        │   │       ├── _evil_hacks.scss
        │   │       ├── _fonts.scss
        │   │       ├── _form_password.scss
        │   │       ├── _forms.scss
        │   │       ├── _icons.scss
        │   │       ├── _layout.scss
        │   │       ├── _mixins.scss
        │   │       ├── _tables.scss
        │   │       └── _typography.scss
        │   ├── drupal ////////////// styles overriding or replacing Drupal modules
        │   │   ├── _absolute_messages.scss
        │   │   ├── _comment.scss
        │   │   ├── _context_reaction_block.scss
        │   │   ├── _contextual.scss
        │   │   ├── _ctools.scss
        │   │   ├── _ctools_modal.scss
        │   │   ├── _field.scss
        │   │   ├── _l10n_client.scss
        │   │   ├── _node.scss
        │   │   ├── _oembed.scss
        │   │   ├── _rules.scss
        │   │   ├── _search.scss
        │   │   ├── _shortcut.scss
        │   │   ├── _system_base.scss
        │   │   ├── _system_menus.scss
        │   │   ├── _system_messages.scss
        │   │   ├── _system_theme.scss
        │   │   ├── _toolbar.scss
        │   │   ├── _user.scss
        │   │   ├── _vertical_tabs.scss
        │   │   ├── _views.scss
        │   │   └── basic ////////////// Styles for the drupal basic theme
        │   │       └── _basic.scss
        │   ├── jquery ////////////// Jquery UI CSS
        │   │   ├── _ui_core.scss
        │   │   └── _ui_theme.scss
        │   ├── meedan ////////////// Meedan Sass (formerly "bowerbird")
        │   │   ├── _debug.scss
        │   │   ├── _drupal.scss
        │   │   ├── _gradients.scss
        │   │   ├── _lang.scss
        │   │   ├── _print.scss
        │   │   ├── _transition.scss
        │   │   ├── _typography.scss
        │   │   └── icons ////////////// Meedan icons
        │   │       ├── _fontawesome.scss
        │   │       ├── _foundicons.scss
        │   │       └── _icon_helpers.scss
        │   ├── print.scss
        │   ├── style-rtl.scss
        │   └── style.scss
        ├── template.php ////////////// Drupal templates 
        ├── templates 
        │   ├── absolute-messages-message.tpl.php
        │   ├── comment-wrapper.tpl.php
        │   ├── field.tpl.php
        │   ├── flag.tpl.php
        │   ├── heartbeat-activity.tpl.php
        │   ├── html--404--rtl.tpl.php
        │   ├── html--404.tpl.php
        │   ├── html.tpl.php
        │   ├── htmlmail--meedan_notifications.tpl.php
        │   ├── node--discussion.tpl.php
        │   ├── node--media.tpl.php
        │   ├── node--page.tpl.php
        │   ├── node--post.tpl.php
        │   ├── node.tpl.php
        │   ├── oembed-generic.tpl.php
        │   ├── oembed.tpl.php
        │   ├── page--404--rtl.tpl.php
        │   ├── page--404.tpl.php
        │   ├── page.tpl.php
        │   ├── region--footer.tpl.php
        │   ├── region--widgets.tpl.php
        │   ├── user-profile.tpl.php
        │   └── views ////////////// Drupal views
        │       ├── activity_report
        │       │   └── views-view-list--activity-report--block.tpl.php
        │       ├── desk_reports
        │       │   ├── views-exposed-form--desk-reports.tpl.php
        │       │   ├── views-view--desk-reports--block.tpl.php
        │       │   ├── views-view-fields--desk-reports.tpl.php
        │       │   └── views-view-unformatted--desk-reports.tpl.php
        │       ├── desk_updates
        │       │   └── block
        │       │       ├── views-view-fields--desk-updates--block.tpl.php
        │       │       └── views-view-unformatted--desk-updates--block.tpl.php
        │       ├── featured_stories
        │       │   └── block
        │       │       ├── views-view-fields--featured-stories--block.tpl.php
        │       │       └── views-view-unformatted--featured-stories--block.tpl.php
        │       ├── liveblog
        │       │   └── page
        │       │       ├── 0013-Ticket-1405-Refactoring-liveblog-template-to-fit-new.patch
        │       │       ├── views-view-fields--liveblog--page.tpl.php
        │       │       └── views-view-unformatted--liveblog--page.tpl.php
        │       ├── reports
        │       │   └── page
        │       │       ├── views-view--reports--block.tpl.php
        │       │       ├── views-view--reports--page.tpl.php
        │       │       ├── views-view-fields--reports--block.tpl.php
        │       │       ├── views-view-fields--reports--page.tpl.php
        │       │       ├── views-view-unformatted--reports--block.tpl.php
        │       │       └── views-view-unformatted--reports--page.tpl.php
        │       └── updates_for_stories
        │           ├── views-view-fields--updates-for-stories--block.tpl.php
        │           └── views-view-unformatted--updates-for-stories--block.tpl.php
        └── theme-settings.php

    204 directories, 895 files

## Troubleshooting 

#### Common problem: you get a cryptic error when compiling
- make sure you run `bundle install` to install gems
- make sure you use `bundle exec` to load the right gems when compiling

#### Notes on style, gotchas, advice
- Overall are trying to make modular components that do not depend so much on files loaded beforehand.
- The order of the `@import` statements is still important for managing which libraries overrule others (like all CSS).
- use _base.scss for core configuration $variables when they are shared across components — but put "local variables" with their independent components. 
- Everything is commented! ... Thus it is possible that some commentary is outdated. Please comment all your work in the clearest possible language. There must be no mystery-meat CSS, styles which have no explanation. In this perspective, CSS is *not* self-describing language as some would say.
- All stylesheets that start with an underscore are partials, they might contain mixins or complete modules, but they will *not be rendered as .css files* and can not be used to emit styles to a browser or CSS "runtime" import statements.

## Using lint and beautify

As part of our interest in more stable CSS output and clear Sass authoring, we are moving to standardized "lint" and and "beautify" techniques. These are fundamentally regular expressions that check your syntax for typos and stylistic inconsistency.

- We use [scss-lint](https://github.com/causes/scss-lint "causes/scss-lint · GitHub") to check for code style problems. In practice we disable about half of the default scss-lint checks because they are either too strict or just not useful to us, see the configuration yml file below, which you can put in you home directory to customize your install of scss lint.
- For ST3 support, after you have installed scss-lint and can run it from the command line, you can use [sublime-linter for ST3](https://github.com/SublimeLinter/SublimeLinter3 "SublimeLinter/SublimeLinter3 · GitHub") and install the scss linter package. Sublime-linter is a "linter framework."
- ST3 users can also [beautify](https://github.com/badsyntax/SassBeautify "badsyntax/SassBeautify · GitHub") to correct many errors. This particular plugin is compatible 

The configuration files are stored in the meedan-checkdesk/config directory.

There are two critical configuration files: 

#### 1. The configuration for SassBeautify plugin

"Beautify" means your editor will correct minor indentation, syntax, spacing.

        {
          "indent": 2,
          "dasherize": true,
          "old": false,
          "path": false,
          "beautifyOnSave": true,
          "blanklineBetweenSelectors": true
        }

#### 2. And the suggested scss-lint configuration

Linting is like beautification but applies a *larger set of rules* and *only gives errors*. It does not make corrections like Beautify.

Here is an partial example of a few configuration statements from 
`config/SublimeLinter.sublime-settings` which is distributed with this project.

        linters:
          BorderZero:
            enabled: true

          CapitalizationInSelector:
            enabled: true

          ColorKeyword:
            enabled: false

And so on. Each statement enables certain types of lints.... The complete file is stored in `config/SublimeLinter.sublime-settings`.

This disables several rules we don't adhere to. You can store the above as a .scss-lint.yml file in your home directory.

Then you should be able to use scss-lint from the command line even if you don't have the IDE linting integration setup with ST3.

## Responsive breakpoints in natural language

There are two breakpoints, this one for mobile devices: 

        @include respond-to(handhelds) {
            // Only for little screens with tall and narrow aspect ratio
        }

and for larger screens:

        @include respond-to(laptops) {
            // all styles that are larger screens
        }

This avoids confusion related to the application of breakpoints. 

All of the styles are still mobile first, but this clarifies any *viewport-dependent styling*.

## Code style notes 

- Indentation should be spaces not tabs.

## Using scss-lint

[scss-lint] is awesome! 

First, install [scss-lint] make sure you can run the executable:

        you@your.localhost$ `scss-lint -h`

        Usage: scss-lint [options] [scss-files]

        Common options:
            -c, --config file                Specify configuration file
            -e, --exclude file,...           List of file names to exclude
            -f, --format Formatter           Specify how to display lints
            -i, --include-linter linter,...  Specify which linters you want to run
            -x, --exclude-linter linter,...  Specify which linters you don't want to run
                --show-linters               Shows available linters
            -h, --help                       Show this message
            -v, --version                    Show version

- I install it with sublime text 3 using the [SublimeLinter3](https://github.com/SublimeLinter/SublimeLinter3) package. See the [checkdesk theme README].

- Then install this linter for scss that uses sublime linter lint-framework (got it?? :) — [SublimeLinter-contrib-scss-lint](https://sublime.wbond.net/packages/SublimeLinter-contrib-scss-lint)

- Use the configuration files in /config/

- TODO more detailed setup instructions.        

## Our I18N-auto-RTL strategy

- If you look at style-rtl.scss you will see the first thing we do is set $from-direction. The idea is, this is ALL we do. 
- Sometimes we feel the need to make specific accommodations for one language or another, or one text-direction, or one script type. 
- Overall we want to MINIMIZE these direction-specific, language-specific or glyphy-specific styles because they create *duplication* and *slow us down*.
- In the future, we might move to using the lang attribute as set in the HTML.
- Generally our layout does not require these rules because basic "flip" is built into Susy. 
- Study the [grid mixins in Susy](https://github.com/ericam/susy/blob/master/sass/susy/_grid.scss#L155). 
- Note that Susy relies on the $from-direction being set, which is why our strategy of re-rendering the stylesheet in style-rtl.scss works the way it does. 

[susy]: http://susy.oddbird.net
[compass]: http://compass-style.org
[docco]: http://jashkenas.github.io/docco/
[styledocco]: https://github.com/jacobrask/styledocco
[bower]: http://bower.io/
[sass-bootstrap]: https://github.com/alademann/sass-bootstrap
[compass-twitter-bootstrap]: https://github.com/vwall/compass-twitter-bootstrap/tree/3.0.0-wip
[less]: http://lesscss.org/
[scss-lint]: https://github.com/causes/scss-lint
[grunt]: http://gruntjs.com/
[checkdesk-ui]: https://github.com/meedan/meedan-checkdesk/tree/master/ui
[scss-lint README]: https://github.com/causes/scss-lint/tree/c7e5d114a097ad741947ab7c9bb91bb93ef2f09d
[SassBeautify]: https://github.com/einars/js-beautify/#css--html
[sass-toolkit]: https://github.com/Team-Sass/toolkit
[suit-css]: https://github.com/suitcss/suit
[checkdesk theme README]: https://