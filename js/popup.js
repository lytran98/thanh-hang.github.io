
status="Mr.Linhkool"
var a=new Array(),n=""
a[1]='Đ';
a[2]='ú';
a[3]='n';
a[4]='g';
a[5]=' ';
a[6]='v';
a[7]='ậ';
a[8]='y';
a[9]='!';
a[10]=' ';
a[11]='N';
a[12]='h';
a[13]='í';
a[14]='m';
a[15]=' ';
a[16]='y';
a[17]='ê';
a[18]='u';
a[19]=' ';
a[20]='L';
a[21]='ý';
a[22]=' ';
a[23]='n';
a[24]='h';
a[25]='ấ';
a[26]='t';
a[27]=' ';
a[28]='v';
a[29]='ũ';
a[30]=' ';
a[31]='t';
a[32]='r';
a[33]='ụ';
a[34]=' ';
a[35]='l';
a[36]='u';
a[37]='ô';
a[38]='n';
a[39]=' ';
a[40]=' ';
a[41]='♥';
a[42]='♥';
a[43]='♥';
a[44]='♥';
a[45]='♥';
a[46]='♥';
a[47]='♥';
function one()
{
t=document.f.txt.value
j=t.length
if(j>0)
{
for(var i=1;i<=j;i++)
{
n=n+a[i]
if(i==48)
{
document.f.txt.value=""
n=""
}
}
}
document.f.txt.value=n
n=""
setTimeout("one()",1)
}
function s()
{
}
function on()
{
one()
}

        $(document).ready(function() {
            $('#k').hide();
            $('h1').click(function() {
                $('.active').removeClass('active');
                $('#k').slideUp('fast');
                if($(this).next('#k').is(':hidden') == true) {
                $(this).addClass('active');
                $(this).next('#k').slideDown('fast');
                }
            });
        });
					function Yeu()
					{
					$("#divResult").fadeOut(0);
					$("#divResult").html("</br><h2>haha đừng có chối nữa nhé ! <img src='img/3.gif'</img></h2>");
					$("#divResult").fadeIn(2000,function()
							{
							$("#divResult2").fadeOut(0);
							$("#divResult2").html("<p>Lý cũng yêu Nhím nhiều lắm<img src='img/2.gif'/></p></br>");
							$("#divResult2").fadeIn(2000,function()
									{
									$("#divResult3").fadeOut(0);
									$("#divResult3").html("<p>Dù sau này có như thế nào hãy luôn bên anh và yêu anh như thế này em nhé! <img src='img/4.gif'/></p></br>");
									$("#divResult3").fadeIn(2000);
									}
								);
							}
						);
					}
				