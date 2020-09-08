package cn.fudan.edu.se.LabWeb.mapper;

import cn.fudan.edu.se.LabWeb.domain.*;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface labMapper {
    @Select("select * from USERINFO_copy")
    List<labMember> getByLabMemberNAME();

    @Select("select * from USERINFO_copy where USERTYPE = 'se' AND STATE = 'T' AND GTYPE = 'D'")
    List<labMember> getByLabMemberDoc();

    @Select("select * from USERINFO_copy where USERTYPE = 'se' AND STATE = 'T' AND GTYPE = 'M'")
    List<labMember> getByLabMemberPostGraduate();

    @Select("select * from USERINFO_copy where USERTYPE = 'se' AND STATE = 'T' AND GTYPE = 'B'")
    List<labMember> getByLabMemberUnGraduate();

    @Select("select * from OURPAPERS where TYPE = 'I' ORDER BY YEAR DESC")
    List<ourPaper> getByPaperInter();

    @Select("select * from OURPAPERS where TYPE = 'N'")
    List<ourPaper> getByPaperNation();

    @Select("select * from OURPAPERS where TYPE = 'x'")
    List<ourPaper> getByPaperTech();

    @Select("select * from DEGREEPAPERS")
    List<degreePaper> getByPaperDegree();

    @Select("select * from ACTIVITY")
    List<activity> getByActivity();

    @Select("select * from ACTIVITYPIC")
    List<activityPic> getByActivityPic();

    @Select("select * from GRADUATE where GRADUATEDATE=#{GRADUATEDATE}")
    List<graduated> getByGraduated(@Param("GRADUATEDATE") String GRADUATEDATE);

//    @Select("select * from USERINFO_copy where USERTYPE = 'tea' AND STATE = 'T'")
//    List<labMember> getByLabMemberTea();

    @Select("select * from MEMBER ORDER BY TYPE, GRADE")
    List<nowMember> getMemberByWay();

    @Select("select * from NEWSINFO_copy1 ORDER BY PUBDATE DESC limit 6")
    List<newsInfo> getNewsInfo();

    @Select("select newsID from NEWSINFO_copy1 ORDER BY NEWSID DESC limit 1")
    String getNewsInfoNewID();

    @Select("select * from NEWSINFO_copy1 ORDER BY PUBDATE DESC")
    List<newsInfo> getAllNewsInfo();

    @Select("select * from NEWSINFOPIC_copy where NEWSID=#{newsID}")
    List<newsInfoPic> getNewsInfoPic(@Param("newsID") String newsID);

    @Insert("insert into NEWSINFO_copy1 (title,CONTENT,ICON,PUBDATE) values (#{title},#{CONTENT},#{ICON},#{PUBDATE})")
    @Options(useGeneratedKeys = true, keyProperty = "NEWSID", keyColumn = "NEWSID")
    public int insertNewsInfo(@Param("title")String title,@Param("CONTENT")String CONTENT,@Param("ICON")String ICON,@Param("PUBDATE")String PUBDATE);

    @Insert("insert into NEWSINFOPIC_copy (NEWSID,FILENAME) values (#{NEWSID},#{FILENAME})")
    public int insertNewsInfoPic(@Param("NEWSID")String NEWSID,@Param("FILENAME")String FILENAME);

}
