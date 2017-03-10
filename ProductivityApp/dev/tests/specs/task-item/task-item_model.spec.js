import Model from '../../../components/task-item/task-item_model';

let taskItemModel = Model;

describe("taskItemModel()", function() {

  let data = {
    category:"4",
    daily:false,
    deadline:"2016-12-31",
    desc:"Description 222",
    done:false,
    estimation:"4",
    id:"12345",
    priority:"high",
    title:"Task 222"
  };

  let testModel = new taskItemModel(data);

  it('Model should be defined', () => {
    assert.isDefined(taskItemModel);
  });

  it('Should set right params', ()=> {

    expect(testModel.data.id).to.equal("12345");
    expect(testModel.data.deadline).to.equal("2016-12-31");
    expect(testModel.data.desc).to.equal("Description 222");
    expect(testModel.data.estimation).to.equal("4");
    expect(testModel.data.priority).to.equal("high");
    expect(testModel.data.title).to.equal("Task 222");
    expect(testModel.data.daily).to.be.false;
    expect(testModel.data.done).to.be.false;

  });

  it('Methods (getData() & update() should be defined', ()=> {
    assert.isDefined(testModel.getData);
    assert.isDefined(testModel.update);
  });

  it('taskItemModel.getData() should return right value', ()=> {
    assert.deepEqual(testModel.getData(), data);
  });

  it('taskItemModel.update() should set right values', ()=> {
    let updateData = {
      category:"6",
      daily:false,
      deadline:"2016-12-31",
      desc:"Description 222",
      done:false,
      estimation:"4",
      id:"12345",
      priority:"high",
      title:"Task 222"
    };

    testModel.update(updateData);

    assert.deepEqual(testModel.getData(), {
      category:"6",
      daily:false,
      deadline:"2016-12-31",
      desc:"Description 222",
      done:false,
      estimation:"4",
      id:"12345",
      priority:"high",
      title:"Task 222"
    });
  });

});

