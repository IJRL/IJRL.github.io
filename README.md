# IJRL.github.io

## News
1. Access `/_posts/`
2. Create new file with format `{year e.g. 2022}-{month e.g. 05}-{day e.g. 21}-{Some}-{Title}-{Hmmm}.md`
3. Add data in this format:
```
---
title: "Draft Post"
post_description: "Draft"
---
<h3 class="grid-100 mobile-grid-100 content-heading" >Draft</h3>
<p class="grid-100 mobile-grid-100" style="font-size: 16px;margin-bottom: 15px;">Draft</p>
```

Large Heading:
`<h1 class="grid-100 mobile-grid-100" >Draft</h1>`

Smaller Heading:
`<h3 class="grid-100 mobile-grid-100 content-heading" >Draft</h3>`

Paragraph:
`<p class="grid-100 mobile-grid-100" style="font-size: 16px;margin-bottom: 15px;">Draft</p>`

Any posts created in the `/_drafts/` folder will not be shown on the website.

## Standings
1. Access `/_current_standings/` for current standings or `/_archived_standings/` for archived standings
2. Create a new file with format `season-{num}-tier-{num}.md`
3. Add data in this format:
```
---
layout: "standings"
order: 0
season: "5"
tier: "1"
thumbnail: "/assets/f1-2021-thumbnail.png"
driverschamp: ""
constructorschamp: ""
---
```
4. To get links for championships follow pictures below:
![image](https://user-images.githubusercontent.com/33450935/170718701-afba0da7-f2c7-41cc-954f-fcb1495a8c97.png)
![image](https://user-images.githubusercontent.com/33450935/170718885-1fe1d181-785d-4aae-bc93-4b28b66ff5c4.png)

Only copy higlighted bit.

## Schedule
1. Access `/_data/schedule.json`
2. Add data in this format:
```
{
    "title": "Round 8 - Bahrain GP",
    "subtitle": "Season 5 - Tier 1",
    "timedate": "8 July - 8:00PM",
    "img": "/assets/f1-2021-thumbnail.png"
}
```

Make sure to add comma after each section, unless it is the final section. The schedule will appear in the order that the file is in.
