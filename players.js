function players(){
    /* This is for the levels */

         //Change level
  if (keyWentDown("enter")){
    p1.x = 400;
    p1.y = 0;
  l = l + 1;
  if (l === 9){
    l = 1
  }
}
  if (l === 0){
  pf1.visible = false;
  pf2.visible = false;
  pf3.visible = false;
  pf4.visible = false;
  pf5.visible = false;
  pf6.visible = false;
  pf7.visible = false;
  pf8.visible = false;
  pf9.visible = false;
  pf0.visible = false;

  bp1.visible = false;
  bp2.visible = false;
  bp3.visible = false;
  bp4.visible = false;
  bp5.visible = false;

  h1.visible = false;
  h2.visible = false;
  h3.visible = false;
  h4.visible = false;
  h5.visible = false;
  h6.visible = false;
  }

  if (l === 1){
      pf1.visible = false;
      pf2.visible = false;
      pf3.visible = false;
      pf4.visible = false;
      pf5.visible = false;
      pf6.visible = false;
      pf7.visible = false;
      pf8.visible = false;
      pf9.visible = false;
      pf0.visible = false;
  
      bp1.visible = false;
      bp2.visible = false;
      bp3.visible = false;
      bp4.visible = false;
      bp5.visible = false;
  
      h1.visible = false;
      h2.visible = false;
      h3.visible = false;
      h4.visible = false;
      h5.visible = false;
      h6.visible = false;

      pf1.visible = true;
      p1.collide(pf1);
  }
  if (l === 2){
      pf1.visible = false;
      pf2.visible = false;
      pf3.visible = false;
      pf4.visible = false;
      pf5.visible = false;
      pf6.visible = false;
      pf7.visible = false;
      pf8.visible = false;
      pf9.visible = false;
      pf0.visible = false;
  
      bp1.visible = false;
      bp2.visible = false;
      bp3.visible = false;
      bp4.visible = false;
      bp5.visible = false;
  
      h1.visible = false;
      h2.visible = false;
      h3.visible = false;
      h4.visible = false;
      h5.visible = false;
      h6.visible = false;

      pf2.visible = true;
      bp1.visible = true;
      p1.collide(pf2);
      p1.collide(bp1);
  }
  if (l === 3){
      pf1.visible = false;
      pf2.visible = false;
      pf3.visible = false;
      pf4.visible = false;
      pf5.visible = false;
      pf6.visible = false;
      pf7.visible = false;
      pf8.visible = false;
      pf9.visible = false;
      pf0.visible = false;
  
      bp1.visible = false;
      bp2.visible = false;
      bp3.visible = false;
      bp4.visible = false;
      bp5.visible = false;
  
      h1.visible = false;
      h2.visible = false;
      h3.visible = false;
      h4.visible = false;
      h5.visible = false;
      h6.visible = false;

      pf3.visible = true;
      h1.visible = true;
      p1.collide(pf3);
      p1.collide(h1);
  }
  if (l === 4){
      pf1.visible = false;
      pf2.visible = false;
      pf3.visible = false;
      pf4.visible = false;
      pf5.visible = false;
      pf6.visible = false;
      pf7.visible = false;
      pf8.visible = false;
      pf9.visible = false;
      pf0.visible = false;
  
      bp1.visible = false;
      bp2.visible = false;
      bp3.visible = false;
      bp4.visible = false;
      bp5.visible = false;
  
      h1.visible = false;
      h2.visible = false;
      h3.visible = false;
      h4.visible = false;
      h5.visible = false;
      h6.visible = false;

      pf4.visible = true;
      pf5.visible = true;
      bp2.visible = true;
      bp3.visible = true;
      p1.collide(pf4);
      p1.collide(pf5);
      p1.collide(bp2);
      p1.collide(bp3);
  }
  if (l === 5){
      pf1.visible = false;
      pf2.visible = false;
      pf3.visible = false;
      pf4.visible = false;
      pf5.visible = false;
      pf6.visible = false;
      pf7.visible = false;
      pf8.visible = false;
      pf9.visible = false;
      pf0.visible = false;
  
      bp1.visible = false;
      bp2.visible = false;
      bp3.visible = false;
      bp4.visible = false;
      bp5.visible = false;
  
      h1.visible = false;
      h2.visible = false;
      h3.visible = false;
      h4.visible = false;
      h5.visible = false;
      h6.visible = false;

      pf6.visible = true;
      pf7.visible = true;
      h2.visible = true;
      p1.collide(pf6);
      p1.collide(pf7);
      p1.collide(h2);
  }
  if (l === 6){
      pf1.visible = false;
      pf2.visible = false;
      pf3.visible = false;
      pf4.visible = false;
      pf5.visible = false;
      pf6.visible = false;
      pf7.visible = false;
      pf8.visible = false;
      pf9.visible = false;
      pf0.visible = false;
  
      bp1.visible = false;
      bp2.visible = false;
      bp3.visible = false;
      bp4.visible = false;
      bp5.visible = false;
  
      h1.visible = false;
      h2.visible = false;
      h3.visible = false;
      h4.visible = false;
      h5.visible = false;
      h6.visible = false;

      pf8.visible = true;
      h3.visible = true;
      h4.visible = true;
      p1.collide(pf8);
      p1.collide(h3);
      p1.collide(h4);
  }
  if (l === 7){
      pf1.visible = false;
      pf2.visible = false;
      pf3.visible = false;
      pf4.visible = false;
      pf5.visible = false;
      pf6.visible = false;
      pf7.visible = false;
      pf8.visible = false;
      pf9.visible = false;
      pf0.visible = false;
  
      bp1.visible = false;
      bp2.visible = false;
      bp3.visible = false;
      bp4.visible = false;
      bp5.visible = false;
  
      h1.visible = false;
      h2.visible = false;
      h3.visible = false;
      h4.visible = false;
      h5.visible = false;
      h6.visible = false;

      pf9.visible = true;
      pf0.visible = true;
      p1.collide(pf9);
      p1.collide(pf0);
  }
  if (l === 8){
      pf1.visible = false;
      pf2.visible = false;
      pf3.visible = false;
      pf4.visible = false;
      pf5.visible = false;
      pf6.visible = false;
      pf7.visible = false;
      pf8.visible = false;
      pf9.visible = false;
      pf0.visible = false;
  
      bp1.visible = false;
      bp2.visible = false;
      bp3.visible = false;
      bp4.visible = false;
      bp5.visible = false;
  
      h1.visible = false;
      h2.visible = false;
      h3.visible = false;
      h4.visible = false;
      h5.visible = false;
      h6.visible = false;

      bp4.visible = true;
      bp5.visible = true;
      h5.visible = true;
      h6.visible = true;
      p1.collide(bp4);
      p1.collide(bp5);
      p1.collide(h5);
      p1.collide(h6);
  }


    if (gs === "yes"){
        p1.x = 400;
        p1.y = 0
        p1.visible = true;
    }else{
        p1.visible = false;
    }
    if (keyWentDown("r") && gs === "yes"){
        p1c = p1c + 1;
        if (p1c === 1){
            p1.addImage(p1i1);
        }
        if (p1c === 2){
            p1.addImage(p1i2);
        }
        if (p1c === 3){
            p1.addImage(p1i3);
        }
        if (p1c === 4){
            p1.addImage(p1i4);
        }
        if (p1c === 4){
            p1c = 0;
        }
    }
    if (keyDown("a")){
        p1.x = p1.x - 10;
    }
    if (keyDown("d")){
        p1.x = p1.x + 10;
    }
    if (keyDown("w") && p1.collided(pf1)){
        p1.velocityY = -20;
    }
     p1.velocityY = p1.velocityY + 8;
}