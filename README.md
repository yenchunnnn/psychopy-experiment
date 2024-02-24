# Online psychological experiments

These're part of materials of the online experiments I built with [Open Science Tools](https://opensciencetools.org/).

Which include: 

- PsychoPy
  - One of the most popular open-source packages for running experiments in psychology, neuroscience, and related behavioral sciences. Here's their [github](https://github.com/psychopy) and [official website](https://www.psychopy.org/).
- PsychoJS
  - The JavaScript port of the PsychoPy library. Its purpose is to make PsychoPy experiments available online via a web page. Here's their [github](https://github.com/psychopy/psychojs).
- Pavlovia
  - A place for the wide community of researchers in the behavioral sciences to run, share, and explore experiments online. Here's their [official website](https://pavlovia.org/docs/home/about).

An example of the experiment's flow:

``` mermaid
graph LR
Aid1([Survey]) -->B(Pretest)
    B -- Random Assign --> C[Manipulate IV_1]
    C -->|Group1| D[Manipulate IV_2]
    C -->|Group2| D[Manipulate IV_2]
    D -->|Group1| E(Measure DV)
    D -->|Group2| E(Measure DV)
    D -->|Group3| E(Measure DV)
    E --> F(Posttest)
```

What I've utilized in this project:

-   Python
-   R: rmarkdown, [OCTA shiny app](https://elinevg.shinyapps.io/OCTA_toolbox/)
-   JavaScript
-   Html
-   Gitlab

Thanks to all contributors in open science for helping researchers easily conduct experiments on online platforms without a lot of cost. Which is efficient and good for the science community!
