import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataapiService {

  constructor(
    public http:HttpClient,
  ) { }

  // ประกาศตัวแปรฟังก์ชั่นสำหรับดึงข้อมูลจาก API
  data_detailMen =[];

  // ฟังก์ชั่นการเพิ่มข้อมูลที่ส่งไปยัง API
  addData(data:any){ c:
    return this.http.post('http://localhost/worapo/api/insert.php',data);
  }

//
listMember(){
  return this.http.get('http://localhost/worapo/api/listmember.php')
}
//แกข้อมูลที่ส่งไป api
editMember(dataEdit:any){
  return this.http.put('http://localhost/worapo/api/update.php',dataEdit)
}
//ลบข้อมูล
deleteMember(id:any){
  return this.http.delete('http://localhost/worapo/api/delete.php?id='+id);
}
}
