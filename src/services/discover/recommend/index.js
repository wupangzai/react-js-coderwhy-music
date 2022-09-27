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

//获取推荐页入驻歌手
export function getSettleSingers() {
  return request({
    url: "/top/artists?limit=5",
    method: "GET",
  });
}

//获取新碟上架数据
export function getNewAlbum(limit) {
  return request({
    url: "/top/album?offset=0&year=2019&month=6",
    params: {
      limit,
    },
  });
}
