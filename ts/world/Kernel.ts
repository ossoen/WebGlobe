const kernel = {
     gl: <any> null,
     canvas: <any> null,     
     renderer: <any> null,
     globe: <any> null,
     idCounter: 0, //Object3D对象的唯一标识
     BASE_LEVEL: 6, //渲染的基准层级
     EARTH_RADIUS: 6378137,
     MAX_PROJECTED_COORD: 20037508.3427892,
     ELEVATION_LEVEL: 7, //开始获取高程数据
     TERRAIN_LEVEL: 10, //开始显示三维地形
     TERRAIN_ENABLED: true, //是否启用三维地形
     TERRAIN_PITCH: 80, //开始显示三维地形的pich
     proxy: ""
};
export default kernel;