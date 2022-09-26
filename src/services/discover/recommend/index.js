import request from "../../request";

//获取推荐页面轮播图
export function getTopBanners() {
  return request({
    url: "/banner",
    method: "GET",
  });
}

//获取推荐页面热门推荐数据
export function getHotRecommends() {
  return request({
    url: "/personalized?limit=8",
    method: "GET",
  });
}
