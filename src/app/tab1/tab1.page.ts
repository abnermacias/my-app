import { Component } from '@angular/core';
import { Chooser } from '@awesome-cordova-plugins/chooser/ngx';
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
  constructor(private readonly chooser: Chooser) {}

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
  openChooser() {
    this.chooser.getFile();
  }
}
