db.meta.insert(
	{
		"mysql" : {
			"dbType" : "mysql",
			"cmds" : [
				"show status",
			],
			"count" : 60,
			"interval" : 1,
			"username" : "root",
			"password" : "root",
		},
		"key_unique" : "mysql"
	}
);

db.taskList.insert(
	{
		"key_unique" : "mysql",
		"mysql": {
			"~key_md5" : 0,
			"distribute" : { }
		}
	}
);

var c = db.taskList.find({"key_unique":"~key_md5"}).count()
if (c == 0) {
	db.taskList.insert(
		{
			"key_unique" : "~key_md5",
			"key_md5" : 0
		}
	);
}

