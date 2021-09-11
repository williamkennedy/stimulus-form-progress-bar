# Stimulus Form Progress Bar

A Stimulusjs controller to help with displaying progress when a user is filling out forms.

Checkout the [demo](https://williamkennedy.github.io/stimulus-form-progress-bar/)

## Install 

You must have StimulusJS already installed.

```
yarn add stimulus-form-progress-bar
```

or 


```
npm install stimulus-form-progress-bar
```
or use directly from unpkg:


```
<script src="https://unpkg.com/stimulus/dist/stimulus.umd.js"></script>
<script src="https://unpkg.com/stimulus-form-progress-bar/dist/stimulus-form-progress-bar.umd.js"></script>
```


Next you have to initialize StimulusJS and import the Stimulus Form Progress Bar

```
import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

const application = Application.start()
const context = require.context("controllers", true, /_controller\.js$/)
application.load(definitionsFromContext(context))

import { ProgressBar } from 'stimulus-form-progress-bar'
application.register('progress-bar', ProgressBar)
```

## Basic Usage

Add the relevant markup to get started. Note this example uses TailwindCSS.

Note you need a bar target and each input element except radio buttons need a required attribute.

1. Add data-controller to the parent div
2. Add data-progress-bar-target='bar' to your progress bar with a width of 0

```
<div data-controller='progress-bar'  class="container mx-auto">
  <div class="relative pt-1 px-2">
    <div class="flex mb-2 items-center justify-between">
      <div>
        <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200">
          Start
        </span>
      </div>
      <div class="text-right">
        <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200">
          Finish
         </span>
       </div>
      </div>
      <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
        <div data-progress-bar-target='bar' required class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500">
        </div>
      </div>
    </div>
  </div>
</div>

```
3. Next, add a required attribute to the input element followed by `data-action='progress-bar#updateProgressBar'`

```
<input data-action='progress-bar#updateProgressBar' type="text" name="name" id="name" placeholder="John Doe" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />

```

Checkout the example in the [docs/index.html](https://github.com/williamkennedy/stimulus-form-progress-bar/blob/main/docs/index.html) file

## Options

There are three configuration options that you can use to change your progress bar behaviour.

`data-progress-bar-width-value='30'` will set the initial progress bar to 30%

`data-progress-bar-increment-value='30'` will decide how much the bar should be incremented. In this case, it's 30%. Default is calculated based on number of inputs in the form

`data-progress-bar-min-width-value='30'` will set the minimum width of the bar


## Contributing

Bug reports and pull requests are welcome on GitHub at [https://github.com/williamkennedy/stimulus-form-progress-bar](https://github.com/williamkennedy/stimulus-form-progress-bar). This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

## Licence

This package is available as open source under the terms of the MIT License.
