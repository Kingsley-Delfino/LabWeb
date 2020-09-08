package cn.fudan.edu.se.LabWeb.service;

import java.util.List;


import cn.fudan.edu.se.LabWeb.domain.*;
import cn.fudan.edu.se.LabWeb.mapper.labMapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LabService {

    @Autowired
    private labMapper labMapper;

    public List<labMember> getlabMemberByNAME(){
        return labMapper.getByLabMemberNAME();
    }

    public List<labMember> getlabMemberByDoc(){
        return labMapper.getByLabMemberDoc();
    }

    public List<labMember> getlabMemberByPostGraduate() { return labMapper.getByLabMemberPostGraduate(); }

    public List<labMember> getlabMemberByUnGraduate(){
        return labMapper.getByLabMemberUnGraduate();
    }

    public List<ourPaper> getPaperInter(){
        return labMapper.getByPaperInter();
    }

    public List<ourPaper> getPaperNation(){
        return labMapper.getByPaperNation();
    }

    public List<ourPaper> getPaperTech(){
        return labMapper.getByPaperTech();
    }

    public List<degreePaper> getPaperDegree(){
        return labMapper.getByPaperDegree();
    }

    public List<activity> getAcitvity(){
        return labMapper.getByActivity();
    }

    public List<activityPic> getActivityPic(){
        return labMapper.getByActivityPic();
    }

    public List<graduated> getGraduated(String GRADUATEDATE){ return labMapper.getByGraduated(GRADUATEDATE); }

    public List<nowMember> getMemberByWay(){ return labMapper.getMemberByWay(); }

    public List<newsInfo> getNewsInfo(){ return labMapper.getNewsInfo(); }

    public List<newsInfo> getAllNewsInfo(){ return labMapper.getAllNewsInfo(); }

    public List<newsInfoPic> getNewsInfoPic(String newsID){ return labMapper.getNewsInfoPic(newsID); }

    public String insertNewsInfo(@Param("title")String title, @Param("CONTENT")String CONTENT, @Param("ICON")String ICON, @Param("PUBDATE")String PUBDATE){
//        return labMapper.insertNewsInfo(title,CONTENT,ICON,PUBDATE);
        int i = labMapper.insertNewsInfo(title,CONTENT,ICON,PUBDATE);
        if(i==1){
            return labMapper.getNewsInfoNewID();
        }
        else return "-1";



    }
    public int insertNewsInfoPic(String NEWSID,String FILENAME){ return labMapper.insertNewsInfoPic(NEWSID,FILENAME); }





//    public List<labMember> getlabMemberByTea()
//    {
//        return labMapper.getByLabMemberTea();
//    }
}
