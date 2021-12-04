package cn.fudan.edu.se.LabWeb.mapper;

import cn.fudan.edu.se.LabWeb.domain.*;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import java.util.List;

public interface LabMapper {

    @Select("select * from MEMBER where GRADUATED = '0' ORDER BY TYPE, GRADE;")
    List<LabMember> getLabMemberByGroup();

    @Select("select * from NEWSINFO_copy1 ORDER BY PUBDATE DESC;")
    List<News> getAllNews();

    @Select("select * from OURPAPERS where TYPE = 'I' ORDER BY YEAR DESC;")
    List<Paper> getAllPaper();

    @Select("select * from NEWSINFO_copy1 ORDER BY PUBDATE DESC limit #{limit};")
    List<News> getNewsWithLimit(@Param("limit") int limit);

    @Select("select * from NEWSINFOPIC_copy where NEWSID = #{newsId}")
    List<NewsPicture> getNewsPicture(@Param("newsId") String newsId);
}
