---
title: "Placed 3rd at the 2024 HPE Data Science Showcase!"
excerpt: "As a final project for my Data Science 2 class, we were to participate in the HPE Data Science Showcase 2024 and create a large-scale neural network over any topic. My group and I decided to tackle breast cancer detection! Spoiler: We won 3rd place!"
coverImage: "../assets/breast-cancer/HPE.jpg"
date: "2024-08-11"
author:
  name: Stuart
  picture: "../assets/authors/self2.jpg"
ogImage:
  url: "../assets/breast-cancer/HPE.jpg"
---

## [__Click here for GitHub Repo.__](https://github.com/rileystuartmyers/Breast_Cancer_CNN)


As a final project for my Data Science 2 class, we were to participate in the HPE Data Science Showcase 2024 and create a large-scale neural network over any topic. My group and I decided to tackle breast cancer detection!
Spoiler: We won 3rd place!

![Alt text](../assets/breast-cancer/class.jpg)

Over the span of two-ish months, my wonderful group and I developed and trained a neural network (based on ResNet101 model) to detect malignancy in XRAY images, which would ideally be used by oncologists in hospitals
and cancer centers.

Of course, I think oncologists with decades of experience in looking at and treating tumors would probably perform better at classifying images than this model... but can I download an oncologist?
No. 
![Alt text](../assets/breast-cancer/smirk.jpg)

In the display image below, you'll see various accuracy graphs obtained throughout the models history. Each of the graphs represents the model with certain parameters being changed, such as batch size, trainability, learning rate, etc.

![Alt text](../assets/breast-cancer/resultsfull.jpg)

This process, ***hyperparameter tuning***, is more or less a mass trial and error in finding the perfect settings for the model so that, in its learning phase, it extracts as much information from the Xray dataset as possible. The end results for the model were...

# ~90% training accuracy.
# ~65% testing accuracy.

Not too bad!

The project was a complete blast, all thanks to both my friends in DS2 along with my incredible professor, Dr. Rizk! I've added my groups project poster below if you care about that. You might not though, it's a lot of reading and the text is super small. Thanks!

![Alt text](../assets/breast-cancer/poster.jpg)

\-Stuart