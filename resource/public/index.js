W$TYPE={ $name:"Hello",
  nIncrease: function(el,ev,arg){
    ++this.n;
  },
  message:null,
  greetings: function(el,ev,arg){
    W$CALL('!hello',arg, el);
  }
}

W$DATA={
  n: 1,
}