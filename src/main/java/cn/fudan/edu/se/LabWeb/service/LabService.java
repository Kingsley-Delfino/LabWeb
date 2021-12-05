package cn.fudan.edu.se.LabWeb.service;

import java.util.List;
import cn.fudan.edu.se.LabWeb.domain.*;
import cn.fudan.edu.se.LabWeb.mapper.LabMapper;
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

    public List<News> getNewsWithText(String text) {
        return labMapper.getNewsWithText(text);
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
}
