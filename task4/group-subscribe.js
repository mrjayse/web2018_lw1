const myGroups = []; // массив для хранения подписок на группы

const groupList = [
  { groupName: 'Habrahabr'},
  { groupName: 'Web2018'},
];

/**
 * Функция подписки на группы
 * @param group
 */
function subscribeGroup(group) {
  if(isGroupExists(group) && !isSubscribedTo(group)){
	myGroups.push(group);
	console.log("Subscribed");
  }else if(!isGroupExists(group)){
    console.error("Unknown group");
  }else if(isSubscribedTo(group)){
    console.error("Already subscribed");
  }
}

/**
 * Функция отписки от группы
 * @param group
 */
function unsubscribeGroup(group) {
  if(isSubscribedTo(group)){
    for(var gr in groupList){
      if(groupList[gr].groupName === group){
		console.log("Unsubscribed");
        return;
	  }
	}
  }else{
    console.error("Not subscribed");
  }
}

/**
 * Функция проверки существования группы
 * @param group
 */
function isGroupExists(group) {
	for(var gr in groupList){
		if(groupList[gr].groupName === group){
			return true;
		}
	}
	return false;
}

/**
 * Функция проверки подписки на группу
 * @param group
 */
function isSubscribedTo(group) {
	return myGroups.includes(group);
}