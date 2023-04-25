var data=[];
function add()
{
    var item_ma = document.getElementById("ma").value
    var item_pass = document.getElementById("pass").value
    var item_date = document.getElementById("date").value
    var item_op = document.getElementById("op").value
    var phuphi= 20000
    var a=0


    var item ={
        stt : a,
        ma : item_ma,
        password : item_pass,
        ngaykham : item_date,
        phuphi : phuphi,
        chuyenkhoa : item_op
    }
    data.push(item)
    render()
}

function render()
{
    table =`
    <tr>
                <th >STT</th>
                <th>Mã bệnh nhân</th>
                <th>Mật khẩu</th>
                <th>Này khám</th>
                <th>Phụ thu dịch vụ</th>
                <th>Chuyên khoa</th>
                <th>Action</th>
            </tr>
    `
    for(let i =0;i<data.length;++i)
    {
        table+=
        `
    <tr>
                <td >${data[i].stt+i+1}</td>
                <td>${data[i].ma}</td>
                <td>${data[i].password}</td>
                <td>${data[i].ngaykham}</td>
                <td>${data[i].phuphi}</td>
                <td>${data[i].chuyenkhoa}</td>
                <td><button onclick="deleteitem(${data[i].ma})">Delete</button>
                <button onclick="edititem(${data[i].ma})">Edit</button></td>
                </tr>
    `
    }
    document.getElementById("render").innerHTML= table
}

function clear()
{
     document.getElementById("ma").value = ""
     document.getElementById("ma").value = ""
     document.getElementById("ma").value = ""
     document.getElementById("ma").value = ""
     document.getElementById("ma").value = ""
}

function deleteitem(x)
{
   for(let i=0; i< data.length; i++)
   {
        if(data[i].ma == x){
            data.splice(i,1)

            render()
        }
   }
}

function edititem(x)
{
    for(let i=0 ;i<data.length;i++)
    {
    if(data[i].ma == x){
        document.getElementById("ma").value = data[i].ma;
        document.getElementById("pass").value = data[i].password;
        document.getElementById("date").value = data[i].date;
        document.getElementById("op").value = data[i].chuyenkhoa

        render()
    }
}
}