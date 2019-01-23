SET NAMES UTF8;
DROP DATABASE IF EXISTS ep;
CREATE DATABASE ep CHARSET=UTF8;
USE ep;

/****首页轮播广告商品****/
CREATE TABLE ep_index_carousel(
  id INT PRIMARY KEY AUTO_INCREMENT, #图片编号
  title VARCHAR(255),                #图片标题
  img_url VARCHAR(255),              #图片地址
  href VARCHAR(255)                  #图片链接地址
);

INSERT INTO ep_index_carousel VALUES (null,"明星同款","img/index/banner1.png","brand_series.html");
INSERT INTO ep_index_carousel VALUES (null,"中国风","img/index/banner2.png","brand_series.html");
INSERT INTO ep_index_carousel VALUES (null,"流行元素","img/index/banner3.png","brand_series.html");

/****商品类别表****/
CREATE TABLE ep_product_family(
  id INT PRIMARY KEY AUTO_INCREMENT, #编号
  name VARCHAR(255),                  #分类名称
  family_id INT
);

INSERT INTO ep_product_family VALUES(null,"雅莹精品",0); 
INSERT INTO ep_product_family VALUES(null,"下装",0);  
INSERT INTO ep_product_family VALUES(null,"上衣",0);
INSERT INTO ep_product_family VALUES(null,"大衣",0);
INSERT INTO ep_product_family VALUES(null,"羽绒服",0);  
INSERT INTO ep_product_family VALUES(null,"EP精品",1);
INSERT INTO ep_product_family VALUES(null,"雅莹系列",1);
INSERT INTO ep_product_family VALUES(null,"裙子",2); 
INSERT INTO ep_product_family VALUES(null,"裤子",2);
INSERT INTO ep_product_family VALUES(null,"T恤",3);  
INSERT INTO ep_product_family VALUES(null,"衬衫",3);         
INSERT INTO ep_product_family VALUES(null,"卫衣",3);         
INSERT INTO ep_product_family VALUES(null,"外套",3);         
INSERT INTO ep_product_family VALUES(null,"针织衫",3);      
INSERT INTO ep_product_family VALUES(null,"短款",4);        
INSERT INTO ep_product_family VALUES(null,"中长款",4);       
INSERT INTO ep_product_family VALUES(null,"长款",4);    


/****商品表****/
CREATE TABLE ep_product(
  id INT PRIMARY KEY AUTO_INCREMENT,  #编号
  family_id INT,                      #所属分类编号
  name VARCHAR(255),                  #商品名称
  title VARCHAR(255),                 #商品标题
  price DECIMAL(10,2),                #商品价格
  details VARCHAR(1024),              #商品详情
  p_number VARCHAR(255),              #货号
  p_style VARCHAR(64),                #风格
  pattern VARCHAR(64),                #款式
  fabric VARCHAR(64)                  #面料成分
);
INSERT INTO ep_product VALUES(null,3,"1高领粗棒针毛衣","高领粗棒针毛衣 款型廓形感包容性强",2399,"短款的设计能在视觉上缩短上半身，拉长腿部线条，展现良好的身材比例。粗针绞花呈现出雕塑般的立体肌理，结合大小肌理变化呈现出多样性。","EGDAG9531a","日常","套头","羊毛");
INSERT INTO ep_product VALUES(null,2,"2高领粗棒针毛衣","高领粗棒针毛衣 款型廓形感包容性强",2799,"短款的设计能在视觉上缩短上半身，拉长腿部线条，展现良好的身材比例。粗针绞花呈现出雕塑般的立体肌理，结合大小肌理变化呈现出多样性。","EGDAG9531a","日常","套头","羊毛");
INSERT INTO ep_product VALUES(null,1,"3高领粗棒针毛衣","高领粗棒针毛衣 款型廓形感包容性强",1399,"短款的设计能在视觉上缩短上半身，拉长腿部线条，展现良好的身材比例。粗针绞花呈现出雕塑般的立体肌理，结合大小肌理变化呈现出多样性。","EGDAG9531a","日常","套头","羊毛");
INSERT INTO ep_product VALUES(null,5,"4高领粗棒针毛衣","高领粗棒针毛衣 款型廓形感包容性强",399,"短款的设计能在视觉上缩短上半身，拉长腿部线条，展现良好的身材比例。粗针绞花呈现出雕塑般的立体肌理，结合大小肌理变化呈现出多样性。","EGDAG9531a","日常","套头","羊毛");
INSERT INTO ep_product VALUES(null,3,"5高领粗棒针毛衣","高领粗棒针毛衣 款型廓形感包容性强",599,"短款的设计能在视觉上缩短上半身，拉长腿部线条，展现良好的身材比例。粗针绞花呈现出雕塑般的立体肌理，结合大小肌理变化呈现出多样性。","EGDAG9531a","日常","套头","羊毛");