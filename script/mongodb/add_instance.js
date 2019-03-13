db.taskList.update(
	{ "key_unique" : "mongodb" },
	{
		$inc : { "~key_md5" : 1 },
		$set : {
			"mongodb.distribute.127_0_0_1:3001" : {
				"pid" : 0,
				"hid" : 1,
				"host" : "127_0_0_1:3001",
			}
		}
	}
);

db.taskList.update(
	{ "key_unique" : "~key_md5" },
	{
		$inc: { "~key_md5" : 1 }
	}
);

