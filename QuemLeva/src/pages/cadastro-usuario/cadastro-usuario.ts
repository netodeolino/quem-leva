import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { TabsPage } from './../tabs/tabs';
import { UserServiceProvider } from './../../providers/user-service/user-service';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Loading, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  imageFileName:any;

  constructor(
    public authService : AuthServiceProvider,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl : LoadingController,
    public alertCtrl : AlertController,
    public formBuilder : FormBuilder,
    public userService : UserServiceProvider,
    private transfer: FileTransfer,
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
    let username : string = formUser.username;
    
    this.authService.createAuthUser({
      email: formUser.email,
      password: formUser.password  
    }).then((authState) => {
      delete formUser.password;
      let uuid : string = authState.auth.currentUser.uid;

      this.userService.create(formUser, uuid).then(() => {
        this.navCtrl.setRoot(TabsPage);
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
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
  
    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
    }, (err) => {
      console.log(err);
      this.presentToast(err);
    });
  }

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
  
  uploadFile() {
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();
  
    let options: FileUploadOptions = {
      fileKey: 'ionicfile',
      fileName: 'ionicfile',
      chunkedMode: false,
      mimeType: "image/jpeg",
      headers: {}
    }
  
    fileTransfer.upload(this.imageURI, 'http://192.168.0.7:8080/api/uploadImage', options)
      .then((data) => {
      console.log(data+" Uploaded Successfully");
      this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
      loader.dismiss();
      this.presentToast("Image uploaded successfully");
    }, (err) => {
      console.log(err);
      loader.dismiss();
      this.presentToast(err);
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
