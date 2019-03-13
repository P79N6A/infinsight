This is a brief introduction of Inspector, please visit [english wiki](https://yq.aliyun.com/) or [chinese wiki](https://yq.aliyun.com/) if you want to see more details including architecture, data flow, performance and so on.

*  [English document](https://yq.aliyun.com/)
*  [Chinese document](https://yq.aliyun.com/)
*  [FAQ document](https://yq.aliyun.com/)

# Introduce
---

# Usage
---
**Dependency**
> Infinsight depends on **MongoDB** for config management and data persistence, and depends on **Grafana** for data visualization.
> 
> if you already have MongoDB & Grafana service, you can use these exist services. If not, the 'AutoDeploy.sh' script will be download and run MongoDB & Grafana for you (service deploy in the path you specify, will not pollute your default environment)

1. Configure your base service
	* 1. make sure **gcc** is exist
	* 2. make sure **golang** is exist and version is greater than 1.10.* 
	
	> if not exist, 'AutoDeploy.sh' will be auto downlaod and deploy golang environment at $DeployDir[default:output]

	* 3. configure IP:PORT of **MongoDB**. 

	> config MongoDB_IP and MongoDB_PORT in Base.cfg
	> 
	> if MongoDB is not exist, 'AutoDeploy.sh' will be auto download and deploy MongoDB at specified IP and PORT at $DeployDir[default:output]
	
	* 4. configure your IP:PORT of **Grafana**. 
	
	> config Grafana_IP and Grafana_PORT in Base.cfg
	> 
	> if Grafana is not exist, 'AutoDeploy.sh' will be auto download and deploy Grafana at specified IP and PORT at $DeployDir[default:output]

2.	Build and Run infinsight
	* 1. build project. 
	
	> config $DeployDir in Base.cfg to specify the building path
	> 
	> run AutoDeploy.sh to build
	 
	* 2. run project. ()
	
	> goto the building path($DeployDir)
	> 
	> run start_grafana.sh if you want to use the Grafana downloaded
	> 
	> run start_mongo.sh if you want to use the MongoDB downloaded
	> 
	> run start_inspector.sh to start the Monitor

3. Config new service and instance to monitor
	> cd script/mongodb for adding MongoDB for example
	1. mongo 127.0.0.1:27017/MonitorConfig add_service.js
	2. mongo 127.0.0.1:27017/MonitorConfig add_instance.js
	3. mongo 127.0.0.1:3001/MonitorData create_index.js

4. Config grafana to show monitor data
	1. Add Data Source
	
	> Name: Infinsight
	> Type: Prometheus
	> URL: 127.0.0.1:3000
	> Access: proxy
	
	2. Load Template
	
	> Import Dashboard: script/grafana_template/mongodb

# Join us
---
