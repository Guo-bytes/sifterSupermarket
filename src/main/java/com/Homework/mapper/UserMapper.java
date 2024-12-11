package com.Homework.mapper;

import com.Homework.pojo.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

public interface UserMapper {

    //用户登录
    @Select("select * from user where username=#{username} and password=#{password}")
    User login(@Param("username") String username, @Param("password") String password);

    //用户注册
    @Insert("insert into user values( null,#{username},#{password})")
    void register(User user);

    //查询用户名是否已有
    @Select("select *from user where username=#{username}")
    User selectByUsername(String username);

}
