var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope,$interval) {

	//倒计时
	$scope.LastDay = 44;
	setInterval(function(){
		$scope.LastDay-- ;
		$scope.$apply();
	},86400);

    //nav 导航 数据
    $scope.navArr = [ {nav:'首页'},
    				  {nav:'大会介绍'},
    				  {nav:'嘉宾信息'},
    				  {nav:'大会日程'},
    				  {nav:'票务'},
    				  {nav:'地图'},
    				  {nav:'合作伙伴'},
    				  {nav:'联系我们'}
     				]

    // $scope.NavClick = function(navIndex){
    // 	$('.nav_ul_li').removeClass('nav_ul_active');
    // 	$('.nav_ul_li').eq(navIndex).addClass('nav_ul_active');

    // 	$('.showDiv').removeClass('showContent');
    // 	$('.showDiv').eq(navIndex).addClass('showContent');

    // 	if(navIndex == 1){
    // 		//创建视频节点
    // 		var _dom = 
				//             '<video class="videoTop" autoplay loop>'+
				//               '<source src="movie.ogg" type="video/ogg">'+
				//               '<source src="movie.mp4" type="video/mp4">'+
				//                '您的浏览器不支持视频播放'+
				//             '</video>'
    //         $('.div2_topBg').append(_dom);

    // 	}else{
    // 		//删除
    // 		$('.videoTop').remove();
    // 	}
    // };
    // $scope.NavClick(0);

	

    // 第一屏 文本

    $scope.contentTopshow1 = true;
    $scope.contentTopshow2 = false;
    $scope.contentTopshow3 = false;
    $scope.contentTopshow4 = false;
    $scope.contentTopshow5 = false;
    $scope.contentTopshow6 = false;

    $scope.top_index = 0;
	var contentToptimerSlider = $interval(function(){
		if( $scope.top_index == 5 ){
			$scope.top_index = 0;
		}

		if( $scope.top_index == 0 ){
			$scope.contentTopshow1 = true;
		    $scope.contentTopshow2 = false;
		    $scope.contentTopshow3 = false;
		    $scope.contentTopshow4 = false;
		    $scope.contentTopshow5 = false;
    		$scope.contentTopshow6 = false;
		}
		if( $scope.top_index == 1 ){
			$scope.contentTopshow1 = false;
		    $scope.contentTopshow2 = true;
		    $scope.contentTopshow3 = false;
		    $scope.contentTopshow4 = false;
		    $scope.contentTopshow5 = false;
    		$scope.contentTopshow6 = false;
		}
		if( $scope.top_index == 2 ){
			$scope.contentTopshow1 = false;
		    $scope.contentTopshow2 = false;
		    $scope.contentTopshow3 = true;
		    $scope.contentTopshow4 = false;
		    $scope.contentTopshow5 = false;
    		$scope.contentTopshow6 = false;
		}
		if( $scope.top_index == 3 ){
			$scope.contentTopshow1 = false;
		    $scope.contentTopshow2 = false;
		    $scope.contentTopshow3 = false;
		    $scope.contentTopshow4 = true;
		    $scope.contentTopshow5 = false;
    		$scope.contentTopshow6 = false;
		}
		if( $scope.top_index == 4 ){
			$scope.contentTopshow1 = false;
		    $scope.contentTopshow2 = false;
		    $scope.contentTopshow3 = false;
		    $scope.contentTopshow4 = false;
		    $scope.contentTopshow5 = true;
    		$scope.contentTopshow6 = false;
		}
		if( $scope.top_index == 5 ){
			$scope.contentTopshow1 = false;
		    $scope.contentTopshow2 = false;
		    $scope.contentTopshow3 = false;
		    $scope.contentTopshow4 = false;
		    $scope.contentTopshow5 = false;
    		$scope.contentTopshow6 = true;
		}
    	$scope.top_index++;

	},3000);

	$scope.cancelContentTopTimer = function(){
		$interval.cancel(contentToptimerSlider);
	};

    //第二屏  文本

    $scope.jianjie = '科技是国家强盛之基，创新是民族进步之魂，创新的关键在于人才，人才的基础在于教育。当前，全球前沿信息技术蓬勃发展，移动互联网大变革、大发展、大融合日益加深，当教育遇到了强势的技术发展，尤其是作为创新驱动战略引擎的高等教育创新和变革的重要性、紧迫性前所未有的凸显。“互联网+”和“大众创新，万众创业”的大时代背景为高等教育人才培养模式创新、教育供给侧改革、优质教育资源均衡覆盖、产教融合模式推动前瞻性、创新型人才培养探索提供了无限的想象空间，中国高等教育正身处一场基于信息技术更伟大的变革中。';
    $scope.jianjie2 = '在“十三五”开局之年，“互联网+”方兴未艾之际，在全国高校与职业院校深化推动教育教学改革之际，聚焦产教融合新范式以及中国高等教育在“互联网+”和“大众创新，万众创业”的时代面临的挑战与机遇，在教育部的指导下，由中国高等教育学会、教育部在线教育研究中心、慧科集团、学堂在线联合主办，慧科教育、高校邦和中国教育创新校企联盟共同承办“2016中国高等教育创新大会”(以下简称“大会”)';
    $scope.jianjie3 = '作为中国最大规模的高等教育盛会，大会旨在搭建教育领域政府主管单位、高校、企业、研究机构的高端交流平台，邀请国内外高等教育与职业教育领域的主管领导、权威专家、教育实践者、知名企业家、产业研究者等以全方位的视角探讨我国“互联网+”时代的产教融合、创新创业、教育供给侧改革、在线教育促进高等教育变革，探索新一代互联网技术与教育教学的深度融合，以及构建教育大生态为我国高等教育教学改革创新建言献策，分享前沿观点，共享实践经验，进而推动我国高等教育创新、优化教育结构、拓展教育资源、引领教育风尚。';

    //第三屏 老师信息
    $scope.showTeacherJianjie = false;
    $scope.teacherList = [
    					{ name:'杨斌',
    					  src:'img/div3/yangbin.png',
    					  job:'教授'	,
    					  job2:'清华大学副校长',
    					  jianjie:'现任清华大学副校长，经济管理学院领导力与组织管理系教授、清华经管领导力研究中心主任以及哈佛-清华-中欧合作SEPC (高级经理人课程）项目联席学术主任。杨斌教授主持和参与了由国家自然科学基金委员会、财政部、中国企业联合会、世界银行等多家部门和组织的国家级研究课题。'
    					},
    					{ name:'包信和' ,
    					  src:'img/div3/baoxinhe.png',
    					  job:'教授',
    					  job2:'复旦大学常务副校长',
    					  jianjie:'现任复旦大学常务副校长、中国科学院院士、发展中国家科学院(TWAS)院士。任J. of Energy Chemistry 期刊(Elsevier)共同主编，《中国科学》《国家科学评论(NSR)》，以及Angew. Chem,Energy & Env. Sci. ,Surf. Sci. Report和Chemical Sci. 等学术期刊编委和顾问编委。'    
    					},
    					{ name:'聂风华' ,
    					  src:'img/div3/niehuafeng.png',
    					  job:'博士'	,
    					  job2:'教育部在线教育研究中心副主任，学堂在线董事长',
    					  jianjie:'现任清华大学副秘书长、在线教育办公室主任、教育部在线教育研究中心副主任。自2013年6月，聂先生即负责统筹清华大学在线教育工作，组织制定发展战略，推动在线教育可持续发展工作机制的有关实践，还作为主要负责人之一创建了清华大学五道口金融学院，并担任首任党委书记、副院长。'
    					},
    					{ name:'罗凯 Kenn Ross' ,
    					  src:'img/div3/luokai.png',
    					  job:''	,
    					  job2:'美国Minerva大学亚太区执行总裁',
    					  jianjie:'毕业于哈佛大学商学院，先后于中国成立了投资基金、留学教育公司，现任Minerva大学——一个被中美教育领军人物高度关注、颠覆“常春藤教育”的首个美国创世纪精英大学——亚太区执行总裁。从美国到中国，从文科生到商场，从哈佛商学院到Minerva大学，不惑之年的他，将讲述漂洋过海背后的梦想和责任。'
    					 },
    					{ name:'方业昌' ,
    					  src:'img/div3/fangyechang.png',
    					  job:'博士',
    					  job2:'慧科集团创始人，董事长',
    					  jianjie:'现任慧科集团创始人及董事长。2010年创立了慧科集团，历经六年发展，慧科集团通过旗下子品牌自主研发并完成创新创业、前沿科技、“互联网+行业”等领域的十余个战略性新兴产业专业体系建设，打通了教育入口到教育出口的可持续发展链条，构建出慧科集团特有的O2O教育生态系统。'
    					 },
    					{ name:'陈滢' ,
    					  src:'img/div3/chenying.png',
    					  job:'博士'	,
    					  job2:'慧科研究院院长',
    					  jianjie:'现任慧科集团首席战略官，慧科研究院院长，负责集团整体发展战略规划和推动、集团研发和创新等工作。陈博士长期研究并专注云计算、大数据等前沿科技、以及物联网、互联网＋和教育等领域和方向，并积极推动该领域的产学研合作，积累了丰富的前沿科技和教育行业知识和洞察力。'
    					 },






						{ name:'杨斌',
    					  src:'img/div3/yangbin.png',
    					  job:'教授'	,
    					  job2:'清华大学副校长',
    					  jianjie:'现任清华大学副校长，经济管理学院领导力与组织管理系教授、清华经管领导力研究中心主任以及哈佛-清华-中欧合作SEPC (高级经理人课程）项目联席学术主任。杨斌教授主持和参与了由国家自然科学基金委员会、财政部、中国企业联合会、世界银行等多家部门和组织的国家级研究课题。'
    					},
    					{ name:'包信和' ,
    					  src:'img/div3/baoxinhe.png',
    					  job:'教授',
    					  job2:'复旦大学常务副校长',
    					  jianjie:'现任复旦大学常务副校长、中国科学院院士、发展中国家科学院(TWAS)院士。任J. of Energy Chemistry 期刊(Elsevier)共同主编，《中国科学》《国家科学评论(NSR)》，以及Angew. Chem,Energy & Env. Sci. ,Surf. Sci. Report和Chemical Sci. 等学术期刊编委和顾问编委。'    
    					},
    					{ name:'聂风华' ,
    					  src:'img/div3/niehuafeng.png',
    					  job:'博士'	,
    					  job2:'教育部在线教育研究中心副主任，学堂在线董事长',
    					  jianjie:'现任清华大学副秘书长、在线教育办公室主任、教育部在线教育研究中心副主任。自2013年6月，聂先生即负责统筹清华大学在线教育工作，组织制定发展战略，推动在线教育可持续发展工作机制的有关实践，还作为主要负责人之一创建了清华大学五道口金融学院，并担任首任党委书记、副院长。'
    					},
    					// { name:'汤道生' ,
    					//   src:'img/div3/taodaosheng.png',
    					//   job:''	,
    					//   job2:'腾讯公司高级执行副总裁兼社交网络事业群总裁',
    					//   jianjie:'现任腾讯公司高级执行副总裁兼社交网络事业群总裁。汤道生先后在Sendmail和Oracle公司负责研发和测试工作。汤先生于2005年加入腾讯公司，自2008年起全面负责社交互联网业务平台的研究与开发工作以及增值服务的管理工作。自2012年汤先生全面负责QQ通信及社交网络平台、增值服务以及开放平台的策略。'
    					// },
    					{ name:'罗凯 Kenn Ross' ,
    					  src:'img/div3/luokai.png',
    					  job:''	,
    					  job2:'美国Minerva大学亚太区执行总裁',
    					  jianjie:'毕业于哈佛大学商学院，先后于中国成立了投资基金、留学教育公司，现任Minerva大学——一个被中美教育领军人物高度关注、颠覆“常春藤教育”的首个美国创世纪精英大学——亚太区执行总裁。从美国到中国，从文科生到商场，从哈佛商学院到Minerva大学，不惑之年的他，将讲述漂洋过海背后的梦想和责任。'
    					 },
    					{ name:'方业昌' ,
    					  src:'img/div3/fangyechang.png',
    					  job:'博士',
    					  job2:'慧科集团创始人，董事长',
    					  jianjie:'现任慧科集团创始人及董事长。2010年创立了慧科集团，历经六年发展，慧科集团通过旗下子品牌自主研发并完成创新创业、前沿科技、“互联网+行业”等领域的十余个战略性新兴产业专业体系建设，打通了教育入口到教育出口的可持续发展链条，构建出慧科集团特有的O2O教育生态系统。'
    					 }

					];

	$scope.sliderIndexLeft = function (){
		$scope.cancelTimer();
    	$scope.slider_index--;
		if( $scope.slider_index < 0 ){

			$scope.slider_index = 6;
			//定位回第六个的位置
			$('.sliderBox').css({
				'marginLeft' : $scope.slider_index * (-220) +'px'
	    	});

		}

    	$('.sliderBox').animate({
			'marginLeft' : $scope.slider_index * (-220) +'px'
    	});
    	console.log($scope.slider_index);

	}

	$scope.sliderIndexRight = function (){
		$scope.cancelTimer();
		$scope.slider_index++;
		if( $scope.slider_index > ( $('.sliderBox1').length - 5 ) ){

			$scope.slider_index = 0;
			//定位回初始位置
			$('.sliderBox').css({
				'marginLeft' : 0 +'px'
	    	}); 

		}

    	$('.sliderBox').animate({
			'marginLeft' : $scope.slider_index * (-220) +'px'
    	});
    	console.log($scope.slider_index);

	}

	$scope.slider_index = 0;
	var timerSlider = $interval(function(){

		if( $scope.slider_index > ( $('.sliderBox1').length - 5 ) ){

			$('.sliderBox').css({
				'marginLeft' : 0 +'px'
    		});

			$scope.slider_index = 0;

		}

    	$('.sliderBox').animate({
			'marginLeft' : $scope.slider_index * (-220) +'px'
    	});

    	$scope.slider_index++;

	},3000);

	$scope.cancelTimer = function(){
		$interval.cancel(timerSlider);
	};

	//第四屏幕
	$scope.show41 = true;
	$scope.show42 = false;
	$scope.show43 = false;
	$scope.show44 = false;

	$scope.showTab4 = function(showTab4index){
		
		if(showTab4index == 1){
			$scope.show41 = true;
			$scope.show42 = false;
			$scope.show43 = false;
			$scope.show44 = false;
			$scope.dataListFour = $scope.dataListFour1;
			$scope.dataListFour_title = $scope.dataListFour_title1;
			return;
		}

		if(showTab4index == 2){
			$scope.show41 = false;
			$scope.show42 = true;
			$scope.show43 = false;
			$scope.show44 = false;
			$scope.dataListFour = $scope.dataListFour2;
			$scope.dataListFour_title = $scope.dataListFour_title2;
			return;
		}

		if(showTab4index == 3){
			$scope.show41 = false;
			$scope.show42 = false;
			$scope.show43 = true;
			$scope.show44 = false;
			$scope.dataListFour = $scope.dataListFour3;
			$scope.dataListFour_title = $scope.dataListFour_title3;
			return;
		}
		if(showTab4index == 4){
			$scope.show41 = false;
			$scope.show42 = false;
			$scope.show43 = false;
			$scope.show44 = true;
			$scope.dataListFour = $scope.dataListFour4;
			$scope.dataListFour_title = $scope.dataListFour_title4;
			return;
		}
	}

	$scope.description = 'hello,<br><b>今天我们去哪里？</b>'
	$scope.dataListFour1 = [
    					{ time:'9:00-9:05',
    					  thing:'主持人致欢迎词及介绍嘉宾',
    					  guest:'中央电视台新闻频道主持人'
    					 },
    					{ time:'9:05-9:10',
    					  thing:'领导致辞',
    					  guest:'教育部领导'
    					 },
    					{ time:'9:10-9:15',
    					  thing:'领导致辞',
    					  guest:'中国高等教育学会领导'
    					 },
    					{ time:'9:15-9:35',
    					  thing:'仪式：高教学会教育创新校企联盟成立仪式',
    					  guest:'教育部高等教育司领导<br/>教育部职业与成人教育司领导<br/>中国高等教育学会领导<br/><br/>康凯<br/>中国高等教育学会秘书长<br/><br/>聂风华 博士<br/>教育部在线教育研究中心副主任<br/>学堂在线董事长<br/><br/>岳喜伟<br/>慧科集团共同创始人、CEO<br/><br/>高校代表<br/><br/>企业代表',
    					 },
    					{ time:'9:35-9:55',
    					  thing:'主题演讲：“互联网+”时代打造高等教育创新活力',
    					  guest:'杨斌 教授<br/>清华大学副校长',
    					 },
    					{ time:'9:55-10:15',
    					  thing:'主题演讲：高校创新创业教育变革的模式探索',
    					  guest:'包信和 院士<br/>复旦大学常务副校长',
    					 },
    					{ time:'10:15-10:35',
    					  thing:'主题演讲：“互联网+”时代产业助力人才培养新模式',
    					  guest:'腾讯高级副总裁'
    					 },
    					{ time:'10:35-11:05',
    					  thing:'主题演讲：中国高等教育产业的未来趋势与格局',
    					  guest:'方业昌 博士<br/>慧科集团创始人、董事长<br/><br/>聂风华 博士<br/>教育部在线教育研究中心副主任<br/>学堂在线董事长',
    					 },
    					{ time:'11:05-11:25',
    					  thing:'主题演讲：高等教育颠覆式创新',
    					  guest:'罗凯（Kenn Ross）<br/>Minerva大学亚太区执行总裁',
    					 },
    					{ time:'11:25-11:45',
    					  thing:'主题演讲：2016教育趋势报告',
    					  guest:'陈滢 博士<br/>慧科研究院院长',
    					 },
    					{ time:'11:45-12:30',
    					  thing:'圆桌论坛：高等教育创新突破新思路',
    					  guest:'主持人：赵婀娜<br/>人民日报教育周刊主编<br/><br/>高校代表<br/><br/>企业代表<br/><br/>机构代表',
    					 },
    					

					];
		// 校企合作协同育人
	$scope.dataListFour2 = [
					{ time:'14:00-14:15',
					  thing:'领导致辞',
					  thing1:'教育部校企合作专业综改项目网站发布',
					  thing2:'国创计划网站发布',
					  guest:'教育部高教司领导'
					 },
					{ time:'14:15-14:35',
					  thing:'主题演讲：校企合作示范',
					  guest:'高教司指定高校代表'
					 },
					{ time:'14:35-14:55',
					  thing:'主题演讲：大学合作计划',
					  guest:'高教司指定企业代表'
					 },

					{ time:'14:55-15:15',
					  thing:'主题演讲：面向战略性新兴产业的专业共建',
					  guest:'对外经济贸易大学'
					 },
					{ time:'15:15-15:35',
					  thing:'主题演讲：在线教育为校企合作创造新机遇',
					  guest:'朱维芳<br/>高校邦COO',
					 },
					{ time:'15:35-16:10',
					  thing:'圆桌论坛：产学合作 协同育人',
					  guest:'主持人：吴英策<br/>中国高等教育学会事业发展部主任<br/><br/>高校代表<br/><br/>企业代表',
					 },
					{ time:'16:10-16:30',
					  thing:'主题演讲：透过学堂在线看MOOC',
					  guest:'纪飚 博士',
					  guest1:'学堂在线COO'
					 },
					{ time:'16:30-16:50',
					  thing:'主题演讲：大数据重新定义“智慧教学”',
					  guest:'百度/IBM高管'
					 },
					{ time:'16:50-17:10',
					  thing:'主题演讲：大学生创新创业趋势',
					  guest:'王蔚<br/>全国高校创新创业投资服务联盟理事长',
					 },
					{ time:'17:10-17:30',
					  thing:'主题演讲：创业学院建设新思路',
					  guest:'周曦<br/>复旦大学创业学院副院长',
					 },
					{ time:'17:30-17:50',
					  thing:'主题演讲：“互联网+”大赛经验分享',
					  guest:'“互联网+”大赛金奖团队'
					 },

				];

	$scope.dataListFour3 = [
					
					{ time:'14:00-14:10',
					  thing:'领导致辞',
					  guest:'教育部职成司领导'
					 },
					{ time:'14:10-14:30',
					  thing:'主题演讲：中国高职创新创业教育经验汇总',
					  guest:'孙爱武 博士<br/>全国高职院校创新创业教育联盟理事长<br/>南京工业职业技术学院党委书记',
					 },
					{ time:'14:30-15:00',
					  thing:'主题演讲：当前职业教育发展亟待解决的几个问题',
					  guest:'杨进 博士<br/>教育部职业与成人教育研究所所长',
					 },
					{ time:'15:00-15:30',
					  thing:'主题演讲：创新的教育和教育的创新',
					  guest:'张海霞 教授<br/>北京大学信息科学技术学院教授',
					 },
					{ time:'15:30-15:45',
					  thing:'仪式：教育部在线职业教育联盟成立仪式',
					  guest:''
					 },
					{ time:'15:45-16:05',
					  thing:'主题演讲：“互联网+”现代职业教育课程开发新模式',
					  guest:'赵巍 博士<br/>课工厂CEO',
					 },
					{ time:'16:05-16:35',
					  thing:'主题演讲：“互联网+”职业教育资源建设的新实践',
					  guest:'姜大源<br/>教育部职业技术教育中心研究所高等职业教育研究中心主任<br/>教育部学校规划建设发展中心课程建设研究院院长',
					 },
					{ time:'16:35-16:55',
					  thing:'主题演讲：职业教育专业教学资源建设的心得体会',
					  guest:'刘斌 教授<br/>天津职业大学校长',
					 },
					{ time:'16:55-17:15',
					  thing:'主题演讲：职业教育O2O模式的教学实践探索',
					  guest:'顾京 教授<br/>无锡职业技术学院副院长',
					 },
					{ time:'17:15-17:35',
					  thing:'主题演讲：职业教育在线教学实践经验',
					  guest:'李春林<br/>深圳职业技术学院主任',
					 },
					{ time:'17:35-18:05',
					  thing:'圆桌论坛：探求新常态下高职教育创新发展着力点',
					  guest:'政府主管部门代表<br/><br/>高校代表<br/><br/>企业代表',
					 },
					
				];

	$scope.dataListFour4 = [
					{ time:'14:00-14:10',
					  thing:'领导致辞',
					  guest:'桑澎<br/>北京留学服务行业协会会长',
					 },
					{ time:'14:10-14:40',
					  thing:'主题演讲：高校国际合作办学经验和未来展望',
					  guest:'杨福家 教授<br/>宁波诺丁汉大学校长',
					 },
					{ time:'14:40-15:10',
					  thing:'主题演讲：中英高等教育产学研多层次合作新趋势',
					  guest:'英国爱丁堡大学副校长'
					 },
					{ time:'15:10-15:40',
					  thing:'主题演讲：“互联网+”国际合作在线化的新格局',
					  guest:'卢鹏 教授<br/>佛罗里达国际大学（FIU）教务长',
					 },
					{ time:'15:40-16:00',
					  thing:'仪式：慧科集团和剑桥教育中心国际战略合作签约仪式',
					  guest:''
					 },
					{ time:'16:00-16:30',
					  thing:'主题演讲：慧科集团校企融合共赢未来新模式',
					  guest:'李茂胜<br/>慧科集团国际事业部总经理',
					 },
					{ time:'16:30-17:20',
					  thing:'圆桌论坛：“互联网+”时代国际合作的多元化',
					  guest:'桑澎<br/>北京留学服务行业协会会长<br/><br/>高校代表<br/><br/>企业代表<br/><br/>慧科集团<br/><br/>YunOffer',
					 },

				];
	$scope.dataListFour_title1 = '中国高等教育创新推动力';
	$scope.dataListFour_title2 = '“互联网+”时代的产教融合和创新创业教育';
	$scope.dataListFour_title3 = '高等职业教育创新之路';
	$scope.dataListFour_title4 = '高等教育国际合作共赢新趋势';

	$scope.showTab4(1);

	//第五屏
	$scope.dataListFive = [
    					{ priceType:'单人购票',
    					  price:'880',
    					  price_1:'嘉宾票'
    					 },
					];
	$scope.dataListFive2 = [
    					{ priceType:'团体购票5人起',
    					  price:'680',
    					  price_1:'嘉宾团购票'
    					 }
					];


})
.filter('trustAsHtml',function($sce){
    return function(content){
        return $sce.trustAsHtml(content);
    }
});