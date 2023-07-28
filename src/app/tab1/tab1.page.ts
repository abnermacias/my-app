import { Component } from '@angular/core';
import { FilePicker } from '@capawesome/capacitor-file-picker';
import {
  Camera,
  CameraPluginPermissions,
  GalleryImageOptions,
} from '@capacitor/camera';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor() {}

  async handleImagePicker() {
    const cameraPermissionStatus = await Camera.checkPermissions();
    if (['granted', 'limited'].includes(cameraPermissionStatus.photos)) {
      this.openPickerImage();
    } else {
      const permissions = {} as CameraPluginPermissions;
      permissions.permissions = ['photos'];
      Camera.requestPermissions(permissions);
    }
  }

  //OPEN IMAGE FROM GALLERY
  openPickerImage() {
    const options = {
      quality: 100,
    } as GalleryImageOptions;
    Camera.pickImages(options);
  }

  //OPEN FILE FROM DEVICE
  async openChooser() {
    const files = await FilePicker.pickFiles({
      multiple: true,
      readData: true,
    });
    console.log(files);
  }
}
