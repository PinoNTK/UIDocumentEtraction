$(document).ready(function(){
  var list_of_passage = [
  "BỘ TÀI CHÍNH CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM - - - - - - - - - - Độc lập – Tự do – Hạnh phúc Số : 78/20 10 / TT - BTC - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Hà Nội , ngày 20 tháng 5 năm 2010 THÔNG TƯ Sửa đổi mức thuế suất thuế xuất khẩu một số mặt hàng thuộc nhóm 2614 trong Biểu thuế xuất khẩu , Biểu thuế nhập khẩu ưu đãi - - - - - - - - - - - - - - - - - - - - - - - - - - - - Căn cứ Luật thuế xuất khẩu , thuế nhập khẩu ngày 14/6/2005 ; Căn cứ Nghị quyết số 295 / 2007 / NQ - UBTVQH12 ngày 28/9/2007 của Ủy ban Thường vụ Quốc hội về việc ban hành Biểu thuế xuất khẩu theo danh mục nhóm hàng chịu thuế và khung thuế suất đối với từng nhóm hàng , Biểu thuế nhập khẩu ưu đãi theo danh mục nhóm hàng chịu thuế và khung thuế suất ưu đãi đối với từng nhóm hàng ; Căn cứ Nghị quyết số 830 / 2009 / UBTV12 ngày 17/10/2009 của Uỷ ban Thường vụ Quốc hội về việc sửa đổi Nghị quyết số 295 / 2007 / NQ - UBTVQH12 ngày 28/9/2007 và Nghị quyết số 710 / 2008 / NQ - UBTVQH12 ngày 22/11/2008 ; Căn cứ Nghị định số 149 / 2005 / NĐ - CP ngày 08/12/2005 của Chính phủ quy định chi tiết thi hành Luật thuế xuất khẩu , thuế nhập khẩu ; Căn cứ Nghị định số 06/20 03 / NĐ - CP ngày 22/02/2003 của Chính phủ qui định về việc phân loại hàng hoá xuất khẩu , nhập khẩu ; Căn cứ Nghị định số 118 / 2008 / NĐ - CP ngày 27/11/2008 của Chính phủ quy định chức năng , nhiệm vụ , quyền hạn và cơ cấu tổ chức của Bộ Tài chính ; Bộ Tài chính sửa đổi mức thuế suất thuế xuất khẩu một số mặt hàng khoáng sản thuộc nhóm 2614 trong Biểu thuế xuất khẩu như sau : Điều 1 .",
  "Mức thuế suất thuế xuất khẩu .",
  "Sửa đổi mức thuế suất thuế xuất khẩu đối với một số mặt hàng khoáng sản thuộc nhóm 2614 qui định tại Danh mục mức thuế suất của Biểu thuế xuất khẩu theo Danh mục mặt hàng chịu thuế ban hành kèm theo Thông tư số 216 / 2009 / TT - BTC ngày 12/11/2009 của Bộ Tài chính thành mức thuế suất thuế xuất khẩu mới qui định tại Danh mục ban hành kèm theo Thông tư này .",
  "Điều 2 .",
  "Hiệu lực thi hành .",
  "Thông tư này có hiệu lực thi hành sau 45 ngày kể từ ngày ký .",
  "/ .",
  "Nơi nhận : KT. BỘ TRƯỞNG - Thủ tướng Chính phủ , các Phó TTCP ; THỨ TRƯỞNG",
  "- Văn phòng TW và các ban của Đảng ; - Văn phòng Quốc hội ; - Văn phòng Chủ tịch nước ; - Toà án nhân dân TC ; ( đã ký ) - Viện Kiểm sát nhân dân TC ; - Kiểm toán Nhà nước ; - Văn phòng BCĐTW về phòng chống tham nhũng ; Đỗ Hoàng Anh Tuấn - Các Bộ , cơ quan ngang Bộ , cơ quan thuộc Chính phủ ; - UBND các tỉnh , thành phố trực thuộc Trung ương ; - Phòng Thương mại và Công nghiệp Việt Nam ; - Cục Kiểm tra văn bản ( Bộ Tư pháp ) ; - Cục Hải quan các tỉnh , thành phố ; - Công báo ; - Website Chính phủ ; - Website Bộ Tài chính ; - Các đơn vị thuộc Bộ Tài chính ; - Lưu : VT , CST ( PXNK ) .",
  "DANH MỤC MỨC THUẾ SUẤT THUẾ XUẤT KHẨU MỘT SỐ MẶT HÀNG TRONG BIỂU THUẾ XUẤT KHẨU ( Ban hành kèm theo Thông tư số 78/20 10 / TT - BTC ngày 20/5/2010 của Bộ Tài chính ) Thuế suất Thuộc các nhóm , thuế xuất Mô tả hàng hoá phân nhóm khẩu ( % ) Quặng titan và tinh quặng titan 2614 00 10 - Quặng ilmenite và tinh quặng ilmenite : 2614 00 10 10 - - Inmenit hoàn nguyên ( TiO2 ≥ 56 % và FeO ≤ 11 % ) 15 2614 00 10 20 - - Xỉ titan ( TiO2 ≥ 85 % ) 15 2614 00 10 30 - - Rutile nhân tạo và rutile tổng hợp ( TiO2 ≥ 83 % ) 15 2614 00 10 90 - - Loại khác 20 2614 00 90 00 - Loại khác 20"
]
  var list_of_keys = [{
    "key": "thường", // Key word đọc từ excel,khi kicks vào sẽ hight light trong câu
    "count": 0, // số lần xuất hiện của key word trong văn bản
    "sentence": 0, // Số câu trong văn bản chứa key word
    "positive": 0, // Số câu chứa key word mang ý nghĩa tích cực
    "negative": 0, // Số câu chứa key word mang ý nghĩa tiêu cực
    "money": "1 triệu ; 200.000đ ; 1 tỉ", // số tiền đi kèm với key word
    "past": 0,  // Số câu chứa key word nói về quá khứ
    "present": 0,// Số câu chứa key word nói về hiện tại
    "future": 3, // Số câu chứa key word nói về tương lai
    "image": ["image.jpg"], // đường dẫn của hình ảnh đi kèm key word , hiện ảnh lên web
    "number_table": 0 // Số table chưa key word
  },
  {
    "key": "hàng",
    "count": 0,
    "sentence": 0,
    "positive": 0,
    "negative": 0,
    "money": [],
    "pass": 0,
    "present": 0,
    "future": null,
    "image": [],
    "number_table": 0
  },
  {
    "key": "việt",
    "count": 2,
    "sentence": 2,
    "positive": 0,
    "negative": 0,
    "money": [],
    "pass": 2,
    "present": 0,
    "future": null,
    "image": [],
    "number_table": 0
  },
  {
    "key": "titan",
    "count": 3,
    "sentence": 1,
    "positive": 0,
    "negative": 0,
    "money": [],
    "pass": 1,
    "present": 0,
    "future": null,
    "image": [],
    "number_table": 0
  }
] 
  
for(var i=0; i<list_of_passage.length;i++){
  // console.log(list_of_passage[i])
  $('#documemtContent').append('<p>'+list_of_passage[i]);
}
  
  for(var i = 0;i<list_of_keys.length;i++){
    $('#myTable>tbody').append('<tr id="row_'+i+'">');
    for(j in list_of_keys[i]){
      console.log(j)
      $('#myTable>tbody>'+'#row_'+i).append('<td id="column_'+i+j+'"'+'>'+list_of_keys[i][j]+'</td>');
    }

  }

  $('#myTable').DataTable({
    "scrollX": true
  });
  $('.dataTables_length').addClass('bs-select');

  for(var i=0;i<list_of_keys.length;i++){
    $('#column_'+i+'key').click(function(){
        $("#documemtContent").unmark();
        $("#documemtContent").mark($(this).text(), {
          "element": "span",
          "className": "highlight",
          "accuracy": { "value":"exactly", "limiters": []}
        });
    })
  }
  for(var i=0;i<list_of_keys.length;i++){
    $('#column_'+i+'key').hover(function(){
        $(this).css('cursor','pointer')
    })
  }
})
