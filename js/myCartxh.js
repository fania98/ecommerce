// JavaScript Document



/*�ı�������Ʒ������*/
function changeNum(numId,flag){/*numId��ʾ��Ӧ��Ʒ�������ı���ID��flag��ʾ�����ӻ��Ǽ�����Ʒ����*/
	var numId=document.getElementById(numId);
	if(flag=="minus"){/*������Ʒ����*/
		if(numId.value<=1){
			alert("�������������Ǵ���0");
			return false;
			}
		else{
			numId.value=parseInt(numId.value)-1;
			productCount();
			}
		}
	else{/*flagΪadd��������Ʒ����*/
		numId.value=parseInt(numId.value)+1;
		productCount();
		}
	}
	
/*�Զ�������Ʒ���ܽ��ܹ���ʡ�Ľ��ͻ���*/
function productCount(){
	var total=0;      //��Ʒ����ܼ�
	var integral=0;   //�ɻ���Ʒ����
	
	var price;     //ÿһ����Ʒ�ĵ���
	var number;    //ÿһ����Ʒ������
	var subtotal;  //ÿһ����Ʒ��С��
     //����IDΪshopping��������е�����
	var myitems=document.getElementsByName("shopping");
	for(var i=0;i<myitems.length;i++){
		price=Number(myitems[i].getElementsByClassName("bottomline")[3].getElementsByTagName("p")[0].innerHTML);
		number=Number(myitems[i].getElementsByClassName("bottomline")[4].getElementsByTagName("input")[0].value);
		var k=Number(0);
		price=price*1000;
		k=price*number;
		var valid=document.getElementsByName("cartCheckBox")[i].checked;
		if(valid){
			total+=k;
		}
		myitems[i].getElementsByClassName("bottomline")[5].getElementsByTagName("p")[0].innerHTML=k/1000;
	}
	document.getElementById("total").innerHTML=total/1000;
}

window.onload=productCount;

/*��ѡ��ȫѡ��ȫ��ѡЧ��*/
function selectAll(){
	var oInput=document.getElementsByName("cartCheckBox");
 for (var i=0;i<oInput.length;i++){
 	    oInput[i].checked=document.getElementById("allCheckBox").checked;
	}
}
	
/*���ݵ�����ѡ���ѡ�����ȷ��ȫѡ��ѡ���Ƿ�ѡ��*/
function selectSingle(){
	productCount();
	var k=0;
	var oInput=document.getElementsByName("cartCheckBox");
	 for (var i=0;i<oInput.length;i++){
	   if(oInput[i].checked==false){
		  k=1;
		  break;
	    }
	}
	if(k==0){
		document.getElementById("allCheckBox").checked=true;
		}
	else{
		document.getElementById("allCheckBox").checked=false;
		}
}

/*ɾ��������Ʒ*/
function deleteRow(name1,name2){
	var Index1=document.getElementById(name1);
	var Index2=document.getElementById(name2);
	Index1.parentNode.removeChild(Index1);
	Index2.parentNode.removeChild(Index2);
	productCount();
	}

/*ɾ��ѡ���е���Ʒ*/
function deleteSelectRow(){
	var oInput=document.getElementsByName("cartCheckBox");
	var Index;
	 for (var i=oInput.length-1;i>=0;i--){
	   if(oInput[i].checked==true){
		 Index=document.getElementById(oInput[i].value).rowIndex; /*��ȡѡ���е�������*/
		 document.getElementById("shopping").deleteRow(Index);
	     document.getElementById("shopping").deleteRow(Index-1);
	    }
	}
	productCount();
	}

