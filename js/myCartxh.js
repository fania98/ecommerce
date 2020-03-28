// JavaScript Document



/*改变所购商品的数量*/
function changeNum(numId,flag){/*numId表示对应商品数量的文本框ID，flag表示是增加还是减少商品数量*/
	var numId=document.getElementById(numId);
	if(flag=="minus"){/*减少商品数量*/
		if(numId.value<=1){
			alert("宝贝数量必须是大于0");
			return false;
			}
		else{
			numId.value=parseInt(numId.value)-1;
			productCount();
			}
		}
	else{/*flag为add，增加商品数量*/
		numId.value=parseInt(numId.value)+1;
		productCount();
		}
	}
	
/*自动计算商品的总金额、总共节省的金额和积分*/
function productCount(){
	var total=0;      //商品金额总计
	var integral=0;   //可获商品积分
	
	var price;     //每一行商品的单价
	var number;    //每一行商品的数量
	var subtotal;  //每一行商品的小计
     //访问ID为shopping表格中所有的行数
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

/*复选框全选或全不选效果*/
function selectAll(){
	var oInput=document.getElementsByName("cartCheckBox");
 for (var i=0;i<oInput.length;i++){
 	    oInput[i].checked=document.getElementById("allCheckBox").checked;
	}
}
	
/*根据单个复选框的选择情况确定全选复选框是否被选中*/
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

/*删除单行商品*/
function deleteRow(name1,name2){
	var Index1=document.getElementById(name1);
	var Index2=document.getElementById(name2);
	Index1.parentNode.removeChild(Index1);
	Index2.parentNode.removeChild(Index2);
	productCount();
	}

/*删除选中行的商品*/
function deleteSelectRow(){
	var oInput=document.getElementsByName("cartCheckBox");
	var Index;
	 for (var i=oInput.length-1;i>=0;i--){
	   if(oInput[i].checked==true){
		 Index=document.getElementById(oInput[i].value).rowIndex; /*获取选中行的索引号*/
		 document.getElementById("shopping").deleteRow(Index);
	     document.getElementById("shopping").deleteRow(Index-1);
	    }
	}
	productCount();
	}

