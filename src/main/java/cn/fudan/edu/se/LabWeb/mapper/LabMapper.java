package cn.fudan.edu.se.LabWeb.mapper;

import cn.fudan.edu.se.LabWeb.domain.*;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Options;
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





    @Select("select * from OURPAPERS where TYPE = 'N';")
    List<Paper> getByPaperNation();

    @Select("select * from OURPAPERS where TYPE = 'x';")
    List<Paper> getByPaperTech();

    @Select("select * from DEGREEPAPERS;")
    List<degreePaper> getByPaperDegree();

    @Select("select * from ACTIVITY;")
    List<activity> getByActivity();

    @Select("select * from ACTIVITYPIC;")
    List<activityPic> getByActivityPic();

    @Select("select * from GRADUATE where GRADUATEDATE = #{GRADUATEDATE};")
    List<graduated> getByGraduated(@Param("GRADUATEDATE") String GRADUATEDATE);

    @Select("select newsID from NEWSINFO_copy1 ORDER BY NEWSID DESC limit 1")
    String getNewsInfoNewID();

    @Select("select * from NEWSINFOPIC_copy where NEWSID = #{newsId}")
    List<NewsPicture> getNewsPicture(@Param("newsId") String newsId);

    @Insert("insert into NEWSINFO_copy1 (title,CONTENT,ICON,PUBDATE) values (#{title},#{CONTENT},#{ICON},#{PUBDATE})")
    @Options(useGeneratedKeys = true, keyProperty = "NEWSID", keyColumn = "NEWSID")
    public int insertNewsInfo(@Param("title")String title,@Param("CONTENT")String CONTENT,@Param("ICON")String ICON,@Param("PUBDATE")String PUBDATE);

    @Insert("insert into NEWSINFOPIC_copy (NEWSID,FILENAME) values (#{NEWSID},#{FILENAME})")
    public int insertNewsInfoPic(@Param("NEWSID")String NEWSID,@Param("FILENAME")String FILENAME);
}
