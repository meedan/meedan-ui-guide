---
title: Index of Checkdesk prototypes
description: Collaborative verification projects
layout: default
---

## Checkdesk prototypes active in early 2016.

- [Meme Buster](http://memebuster.checkdesk.org) (microservice "workspace" used by Checkdesk)
- [Bellingcat project page](/prototype/project?view=timeline)
- [Bellingcat report detail page](/prototype/report/1)

<h2>Checkdesk 2016 Information Architecture (WIP)</h2>

### Intakes and outputs

- IN Intake
  + IN:B Bots
    - I:B:BL Bot list
    - I:B:BC Bot config
    - I:B:N Bot name
    - I:B:S Bot scripts
  + IN:E Browser extension
    - IN:E:I Install Extension
    - IN:E:A Add Report (The UI that appears when invoked)
      + preview/edit title
      + preview/edit description
      + set verification status
      + add todo 
      + start a todo

- OUT Output
  + OUT:Static
    - png or jpg static outputs (FB, Twitter, Instagram sizes)
  + OUT:Embed
    - Project
    - Report

### A Checkdesk instance 

- I Instance
  + I:B Cover Image (Optional)
  + I:L Logo (Optional) 
  + I:T Tagline 
  + I:L Links (these point eg to your blogs)
  + I:T Terms of use (Optional) 
  + I:A About (Optional) 
  + I:T Team (one per instance)
    - I:T:L List of people
    - I:T:A Add people
    - I:T:R Remove people
  + I:TE Terms of Use Page (click to edit)
  
  + I:H Instance Homepage
    - I:H:I Homepage Instance Metadata (Everything in I is editable)
    - I:H:PL Homepage Projects List
    - I:H:NAV Homepage Navigation
    - I:H:CUX Homepage Capstone UX (Graphical overview)
    - I:H:CAB Homepage contextual action buttons
      - Report Import 
      - Export Data (one click all data is downloaded)
      - Delete this instance
      - Create Project
    - I:H:RS Desk Report Stream
    - I:H:RS:F Filters 
    - I:H:AN Analytics
    - I:H:PE Profile Edit

### Checkdesk project

  + I:P Project (Was: "Story")
    - I:P:CP Create Project
    - I:P:T Project Title
    - I:P:D Project Description (tweet length)
    - I:P:TM Project tag manager (List tags and edit in batch, prune and merge tags)
    - I:P:D Project Pinned Report
    - I:P:C Project Configuration (eg Privacy settings)
    - I:P:TE Project team
    - I:P:AL Project activity log
    - I:P:AR Project Add Report (same as browser extension)
      + Add a link, it becomes a report with contextual action buttons and suggested tasks
    - I:P:A Project Actions (invoke workspaces)
      + A/B Test workspace — as designed by ARK
      + Geolocation workspace — as designed by ARK
      + Doodle space — draw shapes with text by ARK
      + Note space — type some text notes and add images
      + Reverse image search workspace — utilize Tineye and related tools
  
### Checkdesk Report
  
  + I:R Report
    - I:R:MO Report Media Object
    - I:R:TR Report Translation
      + Language
      + Text 
      + Attribution
    - I:R:CAB Report Contextual Action Buttons
      + Pin to top of project
      + Privacy settings (Public, private, obscure)
      + Set view: Small, medium, large
      + Set image: If the image you want to search is not obvious, the user can choose to search all (large) images in the page 
      + Set status
        - False
        - Verified
        - In progress
        - Not verifiable (Questionable but very difficult to check)
        - Not applicable (Not questionable, supplemental info)
    - I:R:TA Report Tags
      + Tag list
        - Remove tag
      + Add another tag
      + Manage tags (to Project Tag Manager)
    - I:R:TY Report Type (eg Video)
    - I:R:V Via Names (eg anyone who helped find it)
    - I:R:UP Uploader (eg Account that owns it)
    - I:R:CR Creator (eg Who filmed it)
    - I:R:VS Verification Status (eg False)
    - I:R:AS Archive Status (ie if it was deleted)
    - I:R:TI Title of the report
    - I:R:DE Description of the report
    - I:R:L Locations referenced in the report
    - I:R:CLOG Checklog
      + I:R:CLOG:PE Primary Checklog Entry
        - Attribution
        - Verb
        - Date-timestamp
        - Comment (optional)
      + I:R:CLOG:SE Secondary Checklog Entry
        - Attribution
        - Verb
      + I:R:CLOG:P Pinned Entry (Sticks to top and appears in teasers)
      + I:R:TR Translated Entry (TBD)
    - I:R:CLIST Checklist
      + I:R:CL:ST Checklist Suggested Tasks
      + I:R:CL:TA Checklist Task
        - State: unstarted, started, completed, or removed
        - Task
        - Attribution
    - I:R:DP Report Detail Page  
      + (Edit any report attribute)
  
### Workspaces
  
  + I:WS Workspaces
    - I:WS:N Name
    - I:WS:D Description
    - I:WS:H Help
    - I:WS:UI User Interface
    - I:WS:IN Inputs (eg image, video, quote)
    - I:WS:OUT Outputs (usually image or image text)

### Search 

  + I:Search
    - Results (with filter and sort)
    - Facets (Reports, Projects, People)

### Profiles, Auth, &amp; Notifications

  + I:PRO 
    - I:PRO:M My Profile (when authenticated, else same as Your Profile)
      + popover (on hover)
      + full page 
    - I:PRO:Y Your Profile
      + popover (on hover)
      + full page

  + I:SIG Sign in & Register
    - Sign in
    - Register
    - Forgot Password
  
  + I:N Notifications
    - I:N:NL Notification list
    - I:N:NS Notification Settings






