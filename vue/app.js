const app = new Vue({
  el: '#app',
  data:{
    users:[
    {nombre:"patata",mail:"cornea",numero:0},
    {nombre:"izai",mail:"cornea",numero:1},
    {nombre:"alvaro",mail:"cornea",numero:2},
    {nombre:"dj",mail:"cornea",numero:3}
    ],
    nuevoNombre: "",
    nuevoMail: "",
    nuevoNumero: 0
  },
  methods:{
    agregarUsuario () {
        this.users.push({
            nombre: this.nuevoNombre,mail: this.nuevoMail,numero: this.nuevoNumero
        });
        this.nuevoNombre = "";
        this.nuevoMail = "";
        this.nuevoNumero = 0;
        localStorage.setItem('gym-vue',JSON.stringify(this.users))
    },
    eliminarUsuario (name){
      index = -1;
      finded = true;
      for(user of this.users){
        if(user.nombre === name){
          index = this.users.indexOf(user)
        }
      }
      if (index > -1) {
        this.users.splice(index, 1);
      }
      localStorage.setItem('gym-vue',JSON.stringify(this.users))
    }
  },
  created: function(){
    let datosDB = JSON.parse(localStorage.getItem('gym-vue'))
    if(datosDB === null){
      this.users = [];
    }else {
      this.users = datosDB;
    }
  }
})