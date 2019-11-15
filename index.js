//Pass by reference

const me = {
  name:"Mark"
};

const me2 = me;

function nameChanger(obj, newName) {
  obj.name =newName;
}

nameChanger(me,'Fred');