# AudioPlayer

This tool allows you to visualize and compare some audio classification models. The screenshots below show how the audio player works.

![Screenshot 2022-03-07 at 10 43 02](https://user-images.githubusercontent.com/35273715/157010664-67791ac4-eabd-4cc3-a191-9da9b7a0edf8.png)
![Screenshot 2022-03-07 at 11 23 22](https://user-images.githubusercontent.com/35273715/157013249-7692998b-89d1-4a7d-9b8a-5556a277fae0.png)

To customize it you have to modify only the config.json file. The directory structure to comply with is the following:

```
-| annotation_dir
                -| model_name_1
                              -| song_1.json
                              -| song2.json
                              -| ...
                -| model_name_2
                              -| song_1.json
                              -| song2.json
                              -| ...
                -| ...
```

Each .json file have comply with the following structure:

```
[
  {
    "start": 0, 
    "end": 24.79891156462585, 
    "data": {
      "label": "instrumental"
    }
  }, 
  {
    "start": 24.822131519274375, 
    "end": 29.326802721088434, 
    "data": {
      "label": "vocals"
    }
  }, 
  ...
]
```

The config.json file contains the following parameters:

```
{
  "app_name": name of the system (ex. Instrumentalness),
  "song_names": an array of the song names available, without the file extension,
  "annotation_dir": absolute path of annotation_dir folder,
  "audio_dir": absolute path of the folder with the audio file to listen to
}
```

To run this application you have to:
- Clone this repository
- cd AudioPlayer
- npm install
- npm start

