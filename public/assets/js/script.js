$(function () {
  $(".editBtn").on("click", function () {
    // console.log("testing jquery");

    const id = $(this).data('id');
    // console.log(id);

    $.ajax({
        url: 'http://localhost/phpmvc/public/mahasiswa/getDataUbah',
        data: {id: id},
        method: 'post',
        dataType: 'json',
        success: function(data){
            $('#jurusan').val(data.jurusan);
        }
    })


  });
});

