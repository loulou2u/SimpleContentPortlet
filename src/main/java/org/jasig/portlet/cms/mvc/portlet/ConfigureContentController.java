/**
 * Licensed to Jasig under one or more contributor license
 * agreements. See the NOTICE file distributed with this work
 * for additional information regarding copyright ownership.
 * Jasig licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file
 * except in compliance with the License. You may obtain a
 * copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
package org.jasig.portlet.cms.mvc.portlet;

import javax.portlet.ActionRequest;
import javax.portlet.ActionResponse;
import javax.portlet.PortletMode;
import javax.portlet.PortletModeException;
import javax.portlet.PortletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.jasig.portlet.cms.mvc.form.ContentForm;
import org.jasig.portlet.cms.service.IStringCleaningService;
import org.jasig.portlet.cms.service.dao.IContentDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * ConfigureContentController allows administrative users to set the content 
 * to be displayed by the portlet.  This controller is responsible for 
 * performing any required content validation, removing any unwanted or 
 * dangerous tags and attributes from the configured HTML, and persisting it
 * to the configured content store.
 * 
 * @author Jen Bourey, jbourey@unicon.net
 * @version $Revision$
 */
@Controller
@RequestMapping("CONFIG")
public class ConfigureContentController {

    protected final Log log = LogFactory.getLog(getClass());
    
    private IContentDao contentDao;
    
    @Autowired(required = true)
    public void setContentDao(IContentDao contentDao) {
        this.contentDao = contentDao;
    }
    
    private IStringCleaningService cleaningService;
    
    @Autowired(required = true)
    public void setStringCleaningService(IStringCleaningService cleaningService) {
        this.cleaningService = cleaningService;
    }

    /**
     * Show the main configuration view.
     * 
     * @return
     */
    @RequestMapping
    public String showContentForm() {
        return "configureContent";
    }
    
    /**
     * Update the portlet's configuration according to the submitted form
     * object.
     * 
     * @param request
     * @param response
     * @param form
     * @throws PortletModeException 
     */
    @RequestMapping(params="action=updateConfiguration")
    public void updateConfiguration(ActionRequest request, ActionResponse response, 
            @ModelAttribute("form") ContentForm form) throws PortletModeException {
        
        // first strip the content of any dangerous HTML
        String content = cleaningService.getSafeContent(form.getContent());
        
        // save the new content to the portlet preferences
        this.contentDao.saveContent(request, content);
        
        // exit the portlet's configuration mode
        response.setPortletMode(PortletMode.VIEW);
    }
    
    /**
     * Get the form object for the portlet configuration.  If this portlet has
     * already been configured with content, the current HTML will be 
     * pre-populated into the form object.  If this is a new portlet, the 
     * initial content will be an empty string.
     * 
     * @param request
     * @return
     */
    @ModelAttribute("form")
    public ContentForm getForm(PortletRequest request) {
        
        String content = this.contentDao.getContent(request);
        
        ContentForm form = new ContentForm();
        form.setContent(content);
        return form;
    }
    
}