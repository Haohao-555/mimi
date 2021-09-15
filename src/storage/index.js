/**
 * Storage缓存封装
 */
const  STORAGE_KEY = 'mall';
export default{
  // 增加
  setItem(key,value,module_name){
    if (module_name){
      let val = this.getItem(module_name);
      val[key] = value;//赋值
      this.setItem(module_name, val);
    }else{
      let val = this.getStorage();
      val[key] = value;
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));//写入
    }
  },


  // 获取某一个模块下面的属性user下面的userName
  getItem(key,module_name){
    if (module_name){
      let val = this.getItem(module_name);//将某个模块下的内容全部取出
      if(val) return val[key];
    }
    return this.getStorage()[key];
  },

  //获取缓存mall下的全部模块
  getStorage(){
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
  },

  clear(key, module_name){
    let val = this.getStorage();
    if (module_name){
      if (!val[module_name])return;
      delete val[module_name][key];
    }else{
        console.log('删除')
      delete val[key];
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
  }
}
