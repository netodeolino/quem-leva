import { Camera, CameraOptions } from '@ionic-native/camera';
import { UserServiceProvider } from './../../providers/user-service/user-service';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Loading, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the CadastroUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-usuario',
  templateUrl: 'cadastro-usuario.html',
})
export class CadastroUsuarioPage {

  signupForm : FormGroup;
  imageURI:any;
  imagemURL:any;

  constructor(
    public authService : AuthServiceProvider,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl : LoadingController,
    public alertCtrl : AlertController,
    public formBuilder : FormBuilder,
    public userService : UserServiceProvider,
    private camera: Camera,
    public toastCtrl: ToastController,
  ){

    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      this.signupForm = this.formBuilder.group({
        name : ['', [Validators.required, Validators.minLength(3)]],
        telefone : ['', [Validators.required, Validators.minLength(3)]],
        email : ['', [Validators.compose([Validators.required, Validators.pattern(emailRegex)])]],
        password : ['', [Validators.required, Validators.minLength(6)]]
      })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroUsuarioPage');
  }

  onSubmit() : void {
    let loading : Loading = this.showLoading();
    let formUser = this.signupForm.value;
    
    console.log(formUser);
    this.authService.createAuthUser({
      email: formUser.email,
      password: formUser.password  
    }).then((authState: AngularFireAuth) => {
      delete formUser.password;
      let uuid : string = this.authService.af.auth.currentUser.uid;
      console.log(uuid);
      
      if(this.imageURI){
        this.uploadFile(uuid);
      }
      this.userService.create(formUser, uuid).then(() => {
        loading.dismiss();
      })
    }).catch((error : any) => {
      console.log(error);
      loading.dismiss();
      this.showAlert(error);
    });
  }

  getImage() {
    const options: CameraOptions = {
      quality: 100,
      targetHeight: 200,
      targetWidth: 200,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
  
    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = this.dataURItoBlob('data:image/jpeg;base64,' + imageData);
      this.imagemURL = 'data:image/jpeg;base64,' + imageData
    }, (err) => {
      console.log(err);
      this.presentToast(err);
    });
  }

  dataURItoBlob(dataURI) {
    // code adapted from: http://stackoverflow.com/questions/33486352/cant-upload-image-to-aws-s3-from-ionic-camera
    let binary = atob(dataURI.split(',')[1]);
    let array = [];
    for (let i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
  };

  private showLoading() : Loading {
    let loading : Loading = this.loadingCtrl.create({
    content : 'Criando conta...'});

    loading.present();
    return loading;
  }

  private showAlert(message : string) : void {
    this.alertCtrl.create({
      message : message,
      buttons : ['Ok']
    }).present(); 
  }
  
  uploadFile(key): any {
    var blob = new Blob([this.imageURI], { type: "image/jpeg" });
    let uploadTask = this.userService.uploadPhoto(blob, key);
    uploadTask.on('state_changed', (snapshot) => {
      }, (error : Error) => {
        //catch error
      }, () => {
        this.userService.currentUser.update({photo: uploadTask.snapshot.downloadURL});
      });
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}