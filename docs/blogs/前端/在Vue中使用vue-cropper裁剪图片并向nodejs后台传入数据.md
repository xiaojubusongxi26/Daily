---
title: 在Vue中使用vue-cropper裁剪图片并向nodejs后台传入数据
date: 2022-04-06
tags:
 - Node
 - Vue
 - 前端
categories:
 - 前端
---


[vue-cropper官方地址](https://github.com/xyxiao001/vue-cropper)

`vue-cropper `的安装：

```
npm i vue-cropper 
```

##  在Vue项目中引入Vue-cropper



###  封装组件CropperImage.vue

裁切图片的主要功能部分，可自定义裁切要求。以下`uploadImg()`函数需要改动

```vue
<template>
  <div class="cropper-content">
    <div class="cropper-box">
      <div class="cropper">
        <vue-cropper
            ref="cropper"
            :img="option.img"
            :outputSize="option.outputSize"
            :outputType="option.outputType"
            :info="option.info"
            :canScale="option.canScale"
            :autoCrop="option.autoCrop"
            :autoCropWidth="option.autoCropWidth"
            :autoCropHeight="option.autoCropHeight"
            :fixed="option.fixed"
            :fixedNumber="option.fixedNumber"
            :full="option.full"
            :fixedBox="option.fixedBox"
            :canMove="option.canMove"
            :canMoveBox="option.canMoveBox"
            :original="option.original"
            :centerBox="option.centerBox"
            :height="option.height"
            :infoTrue="option.infoTrue"
            :maxImgSize="option.maxImgSize"
            :enlarge="option.enlarge"
            :mode="option.mode"
            @realTime="realTime"
            @imgLoad="imgLoad">
        </vue-cropper>
      </div>
      <!--底部操作工具按钮-->
      <div class="footer-btn">
        <div class="scope-btn">
          <label class="btn" for="uploads">选择封面</label>
          <input type="file" id="uploads" style="position:absolute; clip:rect(0 0 0 0);" accept="image/png, image/jpeg, image/gif, image/jpg" @change="selectImg($event)">
          <el-button size="mini" type="danger" plain icon="el-icon-zoom-in" @click="changeScale(1)">放大</el-button>
          <el-button size="mini" type="danger" plain icon="el-icon-zoom-out" @click="changeScale(-1)">缩小</el-button>
          <el-button size="mini" type="danger" plain @click="rotateLeft">↺ 左旋转</el-button>
          <el-button size="mini" type="danger" plain @click="rotateRight">↻ 右旋转</el-button>
        </div>
        <div class="upload-btn">
          <el-button size="mini" type="success" @click="uploadImg('blob')">上传封面 <i class="el-icon-upload"></i></el-button>
        </div>
      </div>
    </div>
    <!--预览效果图-->
    <div class="show-preview">
      <div :style="previews.div" class="preview">
        <img :src="previews.url" :style="previews.img">
      </div>
    </div>
  </div>
</template>

<script>
import { VueCropper } from 'vue-cropper'
export default {
  name: "CropperImage",
  components: {
    VueCropper
  },
  props:['Name'],
  data() {
    return {
      name:this.Name,
      previews: {},
      option:{
        img: '',             //裁剪图片的地址
        outputSize: 1,       //裁剪生成图片的质量(可选0.1 - 1)
        outputType: 'jpeg',  //裁剪生成图片的格式（jpeg || png || webp）
        info: true,          //图片大小信息
        canScale: true,      //图片是否允许滚轮缩放
        autoCrop: true,      //是否默认生成截图框
        autoCropWidth: 230,  //默认生成截图框宽度
        autoCropHeight: 150, //默认生成截图框高度
        fixed: true,         //是否开启截图框宽高固定比例
        fixedNumber: [1.53, 1], //截图框的宽高比例
        full: false,         //按原比例裁切图片，不失真
        fixedBox: true,      //固定截图框大小，不允许改变
        canMove: false,      //上传图片是否可以移动
        canMoveBox: true,    //截图框能否拖动
        original: false,     //上传图片按照原始比例渲染
        centerBox: false,    //截图框是否被限制在图片里面
        height: true,        //是否按照设备的dpr 输出等比例图片
        infoTrue: false,     //true为展示真实输出图片宽高，false展示看到的截图框宽高
        maxImgSize: 3000,    //限制图片最大宽度和高度
        enlarge: 1,          //图片根据截图框输出比例倍数
        mode: '230px 150px'  //图片默认渲染方式
      }
    };
  },
  methods: {
    //初始化函数
    imgLoad (msg) {
      console.log("工具初始化函数====="+msg)
    },
    //图片缩放
    changeScale (num) {
      num = num || 1
      this.$refs.cropper.changeScale(num)
    },
    //向左旋转
    rotateLeft () {
      this.$refs.cropper.rotateLeft()
    },
    //向右旋转
    rotateRight () {
      this.$refs.cropper.rotateRight()
    },
    //实时预览函数
    realTime (data) {
      this.previews = data
    },
    //选择图片
    selectImg (e) {
      let file = e.target.files[0]
      if (!/\.(jpg|jpeg|png|JPG|PNG)$/.test(e.target.value)) {
        this.$message({
          message: '图片类型要求：jpeg、jpg、png',
          type: "error"
        });
        return false
      }
      //转化为blob
      let reader = new FileReader()
      reader.onload = (e) => {
        let data
        if (typeof e.target.result === 'object') {
          data = window.URL.createObjectURL(new Blob([e.target.result]))
        } else {
          data = e.target.result
        }
        this.option.img = data
      }
      //转化为base64
      reader.readAsDataURL(file)
    },
    //上传图片
    uploadImg (type) {
      let _this = this;
      if (type === 'blob') {
        //获取截图的blob数据
        this.$refs.cropper.getCropBlob(async (data) => {
          let formData = new FormData();
          formData.append('file',data,"DX.jpg")
          //调用axios上传
          let {data: res} = await _this.$http.post('/api/file/imgUpload', formData)
          if(res.code === 200){
            _this.$message({
              message: res.msg,
              type: "success"
            });
            let data = res.data.replace('[','').replace(']','').split(',');
            let imgInfo = {
              name : _this.Name,
              url : data[0]
            };
            _this.$emit('uploadImgSuccess',imgInfo);
          }else {
            _this.$message({
              message: '文件服务异常，请联系管理员！',
              type: "error"
            });
          }
        })
      }
    },
  },
}
</script>

<style scoped lang="scss">
.cropper-content{
  display: flex;
  display: -webkit-flex;
  justify-content: flex-end;
  .cropper-box{
    flex: 1;
    width: 100%;
    .cropper{
      width: auto;
      height: 300px;
    }
  }

  .show-preview{
    flex: 1;
    -webkit-flex: 1;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    .preview{
      overflow: hidden;
      border:1px solid #67c23a;
      background: #cccccc;
    }
  }
}
.footer-btn{
  margin-top: 30px;
  display: flex;
  display: -webkit-flex;
  justify-content: flex-end;
  .scope-btn{
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    padding-right: 10px;
  }
  .upload-btn{
    flex: 1;
    -webkit-flex: 1;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
  }
  .btn {
    outline: none;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    -webkit-transition: .1s;
    transition: .1s;
    font-weight: 500;
    padding: 8px 15px;
    font-size: 12px;
    border-radius: 3px;
    color: #fff;
    background-color: #409EFF;
    border-color: #409EFF;
    margin-right: 10px;
  }
}
</style>


```



###  新建Tailoring.vue

用于调用**CropperImage.vue**组件

```vue
<template>
  <div class="cropper-app">
    <el-form :model="formValidate" :rules="ruleValidate" ref="formValidate" label-width="100px" class="demo-ruleForm">
      <el-form-item label="封面上传" prop="mainImage">
        <div class="list-img-box">
          <div v-if="formValidate.mainImage !== ''">
            <img :src="formValidate.mainImage" style='width:300px;height:150px' alt="自定义封面">
          </div>
          <div v-else class="upload-btn" style="height: 120px;" @click="uploadPicture('flagImg')">
            <i class="el-icon-plus" style="font-size: 30px;"></i>
            <span>封面设置</span>
          </div>
        </div>
        <input type="hidden" v-model="formValidate.mainImage" placeholder="请添加封面">
      </el-form-item>
    </el-form>
    <!-- 剪裁组件弹窗 -->
    <el-dialog
        title="裁切封面"
        :visible.sync="cropperModel"
        width="950px"
        center
       >
     <cropper-image
         :Name="cropperName"
         @uploadImgSuccess = "handleUploadSuccess"
         ref="child">
     </cropper-image>
    </el-dialog>
    <!--查看大封面-->
    <el-dialog
        title="查看大封面"
        :visible.sync="imgVisible"
        center>
      <img :src="imgName" v-if="imgVisible" style="width: 100%" alt="查看">
    </el-dialog>
  </div>
</template>

<script>
import CropperImage from "@/views/resmanage/CropperImage";
export default {
  name: "Tailoring",
  components: {CropperImage},
  data () {
    return {
      formValidate: {
        mainImage: '',
      },
      ruleValidate: {
        mainImage: [
          {required: true, message: '请上传封面', trigger: 'blur'}
        ],
      },
      //裁切图片参数
      cropperModel:false,
      cropperName:'',
      imgName: '',
      imgVisible: false
    }
  },
  methods: {
    //封面设置
    uploadPicture(name){
      this.cropperName = name;
      this.cropperModel = true;
    },
    //图片上传成功后
    handleUploadSuccess (data){
      console.log(data)
      switch(data.name){
        case 'flagImg':
          this.formValidate.mainImage = 'http://ydfblog.cn/dfs/'+data.url;
          console.log('最终输出'+data.name)
          break;
      }
      this.cropperModel = false;
    }
  }
}
</script>
<style scoped>
  .upload-list-cover{
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0 40px;
      align-items: center;
      background: rgba(0,0,0,.6);
      opacity: 0;
      transition: opacity 1s;
  }
  .cover_icon {
    font-size: 30px;
  }
  .upload-btn{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: 1px solid #cccccc;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0 1px #cccccc;
  }
  .upload-btn:hover {
    border: 1px solid #69b7ed;
  }
  .upload-btn i{
    margin: 5px;
  }
</style>

```

默认样式如下：

<img :src="$withBase('/assets/img/frontend/在Vue中使用vue-cropper裁剪图片并向nodejs后台传入数据.assets/image-20220407003249418.png')">





##  向后端传值

改动**CropperImage.vue**中的**uploadImg()**函数

```js
// 上传图片
    uploadImg (type) {
      let _this = this;
      if (type === 'blob') {
        //获取截图的blob数据
        this.$refs.cropper.getCropBlob(async (data) => {
          let formData = new FormData();
          formData.append('file',data,"DX.jpg")
          console.log(formData.get('file'));
          //调用axios上传
          let { data: res } = await _this.$http.post('http://localhost:1212/api/setUserBg', formData)
          console.log(res);
          if (res.status === 0) {
            _this.$message({
              message: res.message,
              type: "success"
            });
            let data = res.data.replace('[','').replace(']','').split(',');
            let imgInfo = {
              name : _this.Name,
              url : data[0]
            };
            _this.$emit('uploadImgSuccess',imgInfo);
          }else {
            _this.$message({
              message: '文件服务异常，请联系管理员！',
              type: "error"
            });
          }
        })
      }
    },
```

**注意事项：**

1. 此处创建了一个`FormData()`对象传入后端，后端需要配置解析表单数据的插件，不然无法正确获取到值
2. formData通过append方法添加属性和值，对formData打印的结果是一个**空对象**：使用`append`方法后，对应的键值对就已经添加到表单里面了，在控制台看到的是`FormData原型`，存储的数据没有以对象属性的方式体现。
3. 可以通过**formData.get()**方法获取数据
4. 请求头要使用**application/x-www-form-urlencoded**





##  后端接收

###  安装解析表单数据插件

express使用**multiparty**插件解析表单数据

```
npm i multiparty
```

引入插件：

```js
const multiparty = require('multiparty');
```



###  处理数据

在路由模块中：

```js
// 实例化表单
const form = new multiparty.Form();

// 解析表单数据
form.parse(req)
```

from事件类型：

1. 接收数据参数——`field`事件
2. 接收文件参数——`file`事件
3. 表单数据解析完成——`close`事件



此处我们传入的图片，属于文件参数，故调用`file`事件

```js
form.on('file',(name,filevalue)=>{ //file主要是获取文件数据信息。
      console.log('file文件信息:',name,filevalue);
    });
```

输出结果为：

<img :src="$withBase('/assets/img/frontend/在Vue中使用vue-cropper裁剪图片并向nodejs后台传入数据.assets/image-20220407005442688.png')">

- `fieldName`是接收参数的类型名称
- `originalFilename`是文件名称
- `path`是接收文件的路径（**此处文件路径为默认地址，需要进行修改**）
- `headers`请求头参数
- `size`文件的大小



###  修改文件路径

```js
// 复制文件前的目录位置
const src = filevalue.path.replace(/\\/g, '/')
// 复制文件后的目录位置
const dest = './userBg/UserId' + req.user.id + '.jpg'

// 复制文件
fs.copyFile(src, dest,function(err){
	if(err) console.log(err)
	else console.log('copy file succeed');
})

// 删除默认路径中的图片
fs.unlinkSync(src)
```

*个人认为这样修改文件路径算是一种比较笨的方法，更优应该可以使用multer中间件处理文件路径，但是在搜寻很多文章之后，未能找到实现multer处理form表单文件的路径的有效方法。这个问题后续进行优化*



完整代码，仅供参考：

```js
exports.changeBg = (req, res) => {
  console.log('修改背景图', req.user);
  const form = new multiparty.Form();
  try {
    form.on('file',(name,filevalue)=>{ // file主要是获取文件数据信息。
      console.log('file文件信息:',name,filevalue);

      // 复制文件前的目录位置
      const src = filevalue.path.replace(/\\/g, '/')
      // 复制文件后的目录位置
      const dest = './userBg/UserId' + req.user.id + '.jpg'

      // 复制文件
      fs.copyFile(src, dest,function(err){
      	if(err) console.log(err)
      	else console.log('copy file succeed');
      })

      // 删除默认路径中的图片
      fs.unlinkSync(src)

      // 写入数据库
      const sql = `update userinfo set userBg=? where id=?`
      const link = 'UserId' + req.user.id + '.jpg'
      db.query(sql, [ link, req.user.id ], (err, results) => {
        if (err) {
          return res.cc(err)
        }
        if  (results.affectedRows !== 1) return res.cc('上传背景失败')
        return  res.cc('上传背景成功', 0)
      })
    });
    form.parse(req)
  } catch (e) {
    console.log(e)
    res.cc('上传背景失败')
  }
} 
```



##  额外收获

###  Nodejs复制文件的四种方法

###  copyFile

```js
// src 为源文件地址，dist 为将要存放文件的地址
fs.copyFile(src,dist,function(err){
	if(err) console.log('something wrong was happened')
	else console.log('copy file succeed');
}

```

###  readFile、writeFile

```js
// src 为源文件地址，dist 为将要存放文件的地址
fs.readFile(src,function(err,data){
	if(err) throw new Error('something wrong was happended');
	fs.writeFile(dist,data,function(err){
		if(err) throw new Error('something wrong was happended');
	})
})
```

###  createReadStream、read、write

```js
// src 为源文件地址，dist 为将要存放文件的地址
var file = createReadStream(src);
var out = createWriteStream(dist);

file.on('data',function(data){
	out.write(data)
});
file.on('end',function(){
	out.end();
})

```

###  pipe

```js
// src 为源文件地址，dist 为将要存放文件的地址
var file = createReadStream(src);
var out = createWriteStream(dist);

file.pipe(out);

```







##  总结

到此后台基本就拿到前端传入的图片数据了，可以进行常规的数据库操作了



















