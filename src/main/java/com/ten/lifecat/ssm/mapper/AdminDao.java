package com.ten.lifecat.ssm.mapper;

import org.apache.ibatis.annotations.Param;

import java.util.List;

import com.ten.lifecat.ssm.entity.Admin;

public interface AdminDao {

    int insert(@Param("pojo") Admin pojo);

    int insertList(@Param("pojos") List<Admin> pojo);

    List<Admin> select(@Param("pojo") Admin pojo);

    int update(@Param("pojo") Admin pojo);

    int delete(@Param("pojo") Admin pojo);
}
