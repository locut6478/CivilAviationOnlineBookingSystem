const menu = {
    list() {
        return [
            {
                "backMenu": [
                    {
                        "child": [
                            {
                                "buttons": [
                                    "查看",
                                    "新增",
                                    "修改",
                                    "删除"
                                ],
                                "menu": "管理员管理",
                                "menuJump": "列表",
                                "tableName": "users"
                            }
                        ],
                        "menu": "管理员管理"
                    }
                    , {
                        "child": [
                            {
                                "buttons": [
                                    "查看",
                                    "新增",
                                    "修改",
                                    "删除"
                                ],
                                "menu": "用户管理",
                                "menuJump": "列表",
                                "tableName": "yonghu"
                            }
                        ],
                        "menu": "用户管理"
                    }
                    , {
                        "child": [
                            {
                                "buttons": [
                                    "查看",
                                    "新增",
                                    "修改",
                                    "删除"
                                ],
                                "menu": "航班信息管理",
                                "menuJump": "列表",
                                "tableName": "jipiao"
                            }
                            ,
                            {
                                "buttons": [
                                    "查看",
                                    "删除"
                                ],
                                "menu": "航班收藏管理",
                                "menuJump": "列表",
                                "tableName": "jipiaoCollection"
                            }
                            ,
                            {
                                "buttons": [
                                    "订单",
                                    "查看",
                                    "删除"
                                ],
                                "menu": "机票预订管理",
                                "menuJump": "列表",
                                "tableName": "jipiaoOrder"
                            }
                        ],
                        "menu": "航班信息管理"
                    }
                    , {
                        "child": [
                            {
                                "buttons": [
                                    "查看",
                                    "新增",
                                    "修改",
                                    "删除"
                                ],
                                "menu": "客服聊天管理",
                                "menuJump": "列表",
                                "tableName": "chat"
                            }
                        ],
                        "menu": "客服聊天管理"
                    }
                    , {
                        "child": [
                            {
                                "buttons": [
                                    "查看",
                                    "新增",
                                    "删除",
                                    "修改"
                                ],
                                "menu": "航班类型管理",
                                "menuJump": "列表",
                                "tableName": "dictionaryJipiao"
                            }
                            ,
                            {
                                "buttons": [
                                    "查看",
                                    "新增",
                                    "删除",
                                    "修改"
                                ],
                                "menu": "新闻类型管理",
                                "menuJump": "列表",
                                "tableName": "dictionaryNews"
                            }
                        ],
                        "menu": "基础数据管理"
                    }
                    , {
                        "child": [
                            {
                                "buttons": [
                                    "查看",
                                    "新增",
                                    "修改",
                                    "删除"
                                ],
                                "menu": "论坛管理",
                                "menuJump": "列表",
                                "tableName": "forum"
                            }
                        ],
                        "menu": "论坛管理"
                    }
                    , {
                        "child": [
                            {
                                "buttons": [
                                    "查看",
                                    "新增",
                                    "修改",
                                    "删除"
                                ],
                                "menu": "民航新闻管理",
                                "menuJump": "列表",
                                "tableName": "news"
                            }
                        ],
                        "menu": "民航新闻管理"
                    }
                    , {
                        "child": [
                            {
                                "buttons": [
                                    "查看",
                                    "新增",
                                    "修改",
                                    "删除"
                                ],
                                "menu": "轮播图管理",
                                "menuJump": "列表",
                                "tableName": "config"
                            }
                        ],
                        "menu": "轮播图信息"
                    }
                    /*,{
                        "child":[
                            {
                                "buttons":[
                                    "查看"
                                ],
                                "menu":"数据备份",
                                "menuJump":"列表",
                                "tableName":"beifen"
                            },
                            {
                                "buttons":[
                                    "查看"
                                ],
                                "menu":"数据还原",
                                "menuJump":"列表",
                                "tableName":"huanyuan"
                            }
                        ],
                        "menu":"数据库管理"
                    }*/
                ],
                "frontMenu": [],
                "hasBackLogin": "是",
                "hasBackRegister": "否",
                "hasFrontLogin": "否",
                "hasFrontRegister": "否",
                "roleName": "管理员",
                "tableName": "users"
            }
        ]
    }
}
export default menu;
