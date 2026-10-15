---
title: "Training AI to Identify Animals in the Wild"
excerpt: "A glimpse into an image classification task and how it's been automated."
coverImage: "../assets/ohio-smallanimals/deer.jpg"
date: "2025-05-05"
author:
  name: Stuart
  picture: "../assets/authors/self2.jpg"
ogImage:
  url: "../assets/ohio-smallanimals/deer.jpg"
---

## [__Click here for GitHub Repo.__](https://github.com/rileystuartmyers/OhioSmallAnimalsCNN)

Yet another image classification model, except _this time_ I've tackled the _Ohio Small Animals_ dataset, available at 
[***LILA BC: Labeled Information Library of Alexandria: Biology and Conservation***](https://lila.science/datasets/ohio-small-animals/)

The dataset contains over 118,000 images, taken from camera traps scattered around Ohio.

These images are generally taken by camera traps in order to monitor the activity level and diversity of various species in the area, such as squirrels, foxes, raccoons, etc. As a result, you'll be able to see several amazing pictures captured around Ohio, such as this one!

![Alt text](../assets/ohio-smallanimals/cute.jpg)
***Image Source: [***OHPARC.org***](https://ohparc.org)***

After handling the image preprocessing (which you can find along with the entire model's .ipynb file in the GitHub link), I then constructed the model with the parameters found in the code snippet below.\
This structure was chosen after several previous iterations fell short of the performance I was looking for. In the order they appear...

***Rescaling***: _Normalizes_ the data, in which each pixel's (color) value in the image is divided by 255 (since each entry in an RGB, or Red Green Blue, value ranges from 0 to 254) and makes it such that the low and high end of these values become 0 and 1, respectively.

***Conv2D***: Applies a _filter_ that surveys the image in order to extract certain "_features_", which is at the core of how convolutional neural networks _actually_ learn to distinguish objects from eachother.

***MaxPooling2D***: In a sense, _MaxPooling2D_ is responsible for taking the output from the _Conv2D_ layer from before, extracting its most prominent or pronounced features (or the most 'important' features it's found), keeps those, and discards the rest. This is a safe and reliable way to downscale the heftyness of large pools of data, such as a large dataset of high-resolution images.

***Flatten***: Right before the model actually _predicts_ what it's looking at, the _Flatten_ layer takes all previously gathered data and _flattens_ it into a 1-dimensional array of data in which the predictive layers can correctly read from. This is a way to manipulate how the data is being read by the model, and ensures everything is in the correct format.

***Dense***: Finally, the dense layers are what _actually_ do the predicting. It takes all the features found from previous layers and, given a certain number of nodes, will take an input and send its output to a subsequent node that's most compatible with the input's features.\
You'll see at the end of the model's declaration two different _Dense_ layers, with one having 128 nodes, and the next having _num_classes_ amount of nodes (which would be equal to the number of unique animals we're trying to classify, so around 48.)\
Each node in the final _Dense_ layer belongs to one of the 48 different animal categories, and thus when an input image is run through the model the node with the highest output value determines what label to give the input image.

## Code Snippet Showing Model Construction 

    model = tf.keras.Sequential([

    tf.keras.layers.Rescaling(1./255),
    tf.keras.layers.Conv2D(64, 3, activation='relu'),
    tf.keras.layers.MaxPooling2D(),
    tf.keras.layers.Conv2D(64, 3, activation='relu'),
    tf.keras.layers.MaxPooling2D(),
    tf.keras.layers.Conv2D(64, 3, activation='relu'),
    tf.keras.layers.MaxPooling2D(),
    tf.keras.layers.Flatten(),
    tf.keras.layers.Dense(128, activation='relu'),
    tf.keras.layers.Dense(num_classes)

    ])

    model.compile(
        
    optimizer='adam',
    loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
    metrics=['accuracy']
    
    )

    history = model.fit(

        train_ds,
        validation_data = val_ds,
        epochs = 10
        
    )

![Alt text](../assets/ohio-smallanimals/graph.jpg)

And, in order to provide an actual demonstration of the model's performance, below I've assigned it the task of trying to identify what animals reside in each of 9 random images.\
Above each image, the top-most label is what the model predicts is in the image, and the bottom-most label is what the image actually contains.
You'll see that it was actually able to correctly identify each and every creature in the images!

![Alt text](../assets/ohio-smallanimals/predictions.jpg)

Awesome!

This project was a great learning experience in that I was solely responsible for every aspect of this project: parsing of the dataset, image preprocessing, model creation, hyperparameter tuning, and data visualization.\
And hopefully, this post may provide something valuable to anyone interested in starting their own machine learning journey.

Cheers!

\- Stuart


***Balasubramaniam S. Optimized Classification in Camera Trap Images: An Approach with Smart Camera Traps, Machine Learning, and Human Inference. Master’s thesis, The Ohio State University. 2024.***