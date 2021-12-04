package cn.fudan.edu.se.LabWeb.service;

import java.util.List;
import cn.fudan.edu.se.LabWeb.domain.*;
import cn.fudan.edu.se.LabWeb.mapper.LabMapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LabService {

    private final LabMapper labMapper;

    @Autowired
    public LabService(LabMapper labMapper) {
        this.labMapper = labMapper;
    }

    public List<LabMember> getLabMemberByGroup() {
        return labMapper.getLabMemberByGroup();
    }

    public List<News> getAllNews() {
        return labMapper.getAllNews();
    }

    public List<NewsPicture> getNewsPicture(String newsId) {
        return labMapper.getNewsPicture(newsId);
    }

    public List<Paper> getAllPaper(){
        return labMapper.getAllPaper();
    }

    public List<News> getNewsWithLimit(int limit) {
        return labMapper.getNewsWithLimit(limit);
    }






    public List<Paper> getPaperNation(){
        return labMapper.getByPaperNation();
    }

    public List<Paper> getPaperTech(){
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
