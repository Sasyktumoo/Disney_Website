
    function hider() {
      if (this==document.getElementById("ticketLabel")) {
        this.style.background="white";
        dl.style.background="grey";
        hl.style.background="grey";
        mt.style.display="block";
        md.style.display="none";
        mh.style.display="none";
      }
      if (this==document.getElementById("diningLabel")) {
        this.style.background="white";
        tl.style.background="grey";
        hl.style.background="grey";
        md.style.display="block";
        mt.style.display="none";
        mh.style.display="none";
      }
      if (this==document.getElementById("hotelLabel")) {
        this.style.background="white";
        dl.style.background="grey";
        tl.style.background="grey";
        mh.style.display="block";
        mt.style.display="none";
        md.style.display="none";
      }
    }

 
    function test() {
      var ltr=this.id[0];
      var dig=this.id[1];
      var valst =ltr + dig + '-qty';
      var imstr = '#'+ltr + dig + '-img' + ' + label' ;
      var va = document.getElementById(valst).value;
      var va2 = document.querySelector(imstr).innerHTML;
      var tr = document.createElement('tr');
      var th = document.createElement('th');
      temp=0;
      if (va!='' && va!=0) {
        arra[num]=va;
        body.appendChild(tr);
        body.children[num].appendChild(th);
        
        body.children[num].innerHTML = '<th></th> <th></th> ';      
        body.children[num].children[0].innerHTML = va2;
        body.children[num].children[1].innerHTML = va;
        body.children[num].children[0].style.textAlign = "left";
        body.children[num].children[1].style.textAlign = "right";
        num=num+1;  
        temp=va; 
        temp1=va;
        recal();
      }
    }
    function recal() {
      total=total+Number(temp);
      document.getElementById('totalqty').innerHTML = total;
    }
    
    
      