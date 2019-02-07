/**
 * File generated at  2019-01-16 04:13:23 PST 
 * Client: Comcast (312)
 */
define("Automatons/automatons/161", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 161,
    type: "automatons",
    attributes: {
      name: "Comcast Filtering Guide",
      description: "http://jira.touchcommerce.com/browse/CMR-13843",
      initialNode: "node::161",
      proto: 0,
      redirectHeight: 0,
      redirectWidth: 0,
      style: "style::68"
    }
  };
});
define("Automatons/automatons/2001", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2001,
    type: "automatons",
    attributes: {
      name: "Comcast Business - Prechat Form",
      description: "ASI-48",
      initialNode: "node::2001",
      style: "style::2001"
    }
  };
});
define("Automatons/automatons/2004", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2004,
    type: "automatons",
    attributes: {
      name: "Comcast Post Chat Survey",
      type: "satisfactionSurvey",
      description: "https://app.keysurvey.com/f/1010491/8e62/?LQID=1&",
      initialNode: "node::2012",
      style: "style::2004"
    }
  };
});
define("Automatons/automatons/2005", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2005,
    type: "automatons",
    attributes: {
      name: "Comcast Business Care Prechat Survey",
      description: "CMRASI-1764",
      initialNode: "node::2021",
      style: "style::2005"
    }
  };
});
define("Automatons/nodes/161", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 161,
    type: "nodes",
    attributes: {
      name: "Comcast Filtering Initial",
      type: "List",
      heading: "To help provide you with the right support, tell us a little bit about yourself.",
      isChatNode: 0,
      isExitNode: 0,
      isOutcomeNode: 0,
      nodes: [{
        name: "Comcast Filtering New Customer",
        button: "I don&#39;t have Xfinity service",
        node_id: "node::163"
      }, {
        name: "Comcast Filtering Existing Customer",
        button: "I have existing Xfinity service",
        node_id: "node::162"
      }],
      proto: 0,
      redirectHeight: 0,
      redirectWidth: 0,
      template: "template::255"
    }
  };
});
define("Automatons/nodes/162", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 162,
    type: "nodes",
    attributes: {
      name: "Comcast Filtering Existing Customer",
      type: "List",
      heading: "Which topic best describes your question or concern today?",
      isChatNode: 0,
      isExitNode: 0,
      isOutcomeNode: 0,
      nodes: [{
        name: "Comcast Filtering Adding Service",
        button: "Upgrading or Adding New Service",
        node_id: "node::164"
      }, {
        name: "Comcast Filtering Available Offers",
        button: "Viewing Available Offers",
        node_id: "node::169"
      }, {
        name: "Comcast Filtering Moving",
        button: "Moving My Service to a New Address",
        node_id: "node::165"
      }, {
        name: "Comcast Filtering Downgrading",
        button: "Downgrading My Service",
        node_id: "node::168"
      }, {
        name: "Comcast Filtering Billing",
        button: "Billing",
        node_id: "node::167"
      }, {
        name: "Comcast Filtering Technical",
        button: "Technical",
        node_id: "node::171"
      }, {
        name: "Comcast Filtering Other",
        button: "Other",
        node_id: "node::166"
      }],
      proto: 0,
      redirectHeight: 0,
      redirectWidth: 0,
      template: "template::255"
    }
  };
});
define("Automatons/nodes/163", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 163,
    type: "nodes",
    attributes: {
      name: "Comcast Filtering New Customer",
      type: "Chat",
      chatRouter: {
        checkAgentAvailability: false
      },
      deferChatRouting: true,
      isExitNode: 0,
      isOutcomeNode: 1,
      outcomeMessage: "New Customer Chat",
      proto: 0,
      redirectHeight: 0,
      redirectWidth: 0
    }
  };
});
define("Automatons/nodes/164", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 164,
    type: "nodes",
    attributes: {
      name: "Comcast Filtering Adding Service",
      type: "Chat",
      chatRouter: {
        checkAgentAvailability: false
      },
      deferChatRouting: true,
      isExitNode: 0,
      isOutcomeNode: 1,
      outcomeMessage: "Adding Service Chat",
      proto: 0,
      redirectHeight: 0,
      redirectWidth: 0
    }
  };
});
define("Automatons/nodes/165", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 165,
    type: "nodes",
    attributes: {
      name: "Comcast Filtering Moving",
      type: "Redirect",
      isChatNode: 0,
      isExitNode: 1,
      isOutcomeNode: 0,
      proto: 0,
      redirectHeight: 0,
      redirectTarget: "current",
      redirectUrl: "https://login.comcast.net/login?forceAuthn=1&continue=%2fSecure%2fHome.aspx&s=ccentral-cima&r=comcast.net",
      redirectWidth: 0
    }
  };
});
define("Automatons/nodes/166", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 166,
    type: "nodes",
    attributes: {
      name: "Comcast Filtering Other",
      type: "Redirect",
      isChatNode: 0,
      isExitNode: 1,
      isOutcomeNode: 0,
      proto: 0,
      redirectHeight: 0,
      redirectTarget: "current",
      redirectUrl: "https://www.comcastsupport.com/ChatEntry/Protected.aspx",
      redirectWidth: 0
    }
  };
});
define("Automatons/nodes/167", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 167,
    type: "nodes",
    attributes: {
      name: "Comcast Filtering Billing",
      type: "Redirect",
      isChatNode: 0,
      isExitNode: 1,
      isOutcomeNode: 0,
      proto: 0,
      redirectHeight: 0,
      redirectTarget: "current",
      redirectUrl: "https://www.comcastsupport.com/ChatEntry/Protected.aspx",
      redirectWidth: 0
    }
  };
});
define("Automatons/nodes/168", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 168,
    type: "nodes",
    attributes: {
      name: "Comcast Filtering Downgrading",
      type: "Outcome",
      heading: "",
      isChatNode: 0,
      isExitNode: 0,
      isOutcomeNode: 1,
      message: "Please contact 1-800-COMCAST (1-800-266-2278) to have our customer service agents assist you with downgrading.",
      outcomeMessage: "Downgrading",
      proto: 0,
      redirectHeight: 0,
      redirectWidth: 0,
      template: "template::256"
    }
  };
});
define("Automatons/nodes/169", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 169,
    type: "nodes",
    attributes: {
      name: "Comcast Filtering Available Offers",
      type: "Redirect",
      isChatNode: 0,
      isExitNode: 1,
      isOutcomeNode: 0,
      proto: 0,
      redirectHeight: 0,
      redirectTarget: "current",
      redirectUrl: "https://login.comcast.net/login?forceAuthn=1&continue=%2fSecure%2fHome.aspx&s=ccentral-cima&r=comcast.net",
      redirectWidth: 0
    }
  };
});
define("Automatons/nodes/171", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 171,
    type: "nodes",
    attributes: {
      name: "Comcast Filtering Technical",
      type: "Redirect",
      isChatNode: 0,
      isExitNode: 1,
      isOutcomeNode: 0,
      proto: 0,
      redirectHeight: 0,
      redirectTarget: "current",
      redirectUrl: "https://www.comcastsupport.com/ChatEntry/Protected.aspx",
      redirectWidth: 0
    }
  };
});
define("Automatons/nodes/2001", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2001,
    type: "nodes",
    attributes: {
      name: "Comcast Business - Prechat Form Initial",
      type: "routing",
      template: "template::2020"
    }
  };
});
define("Automatons/nodes/2002", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2002,
    type: "nodes",
    attributes: {
      name: "Comcast Business - Reason for chatting",
      type: "list",
      template: "template::2019"
    }
  };
});
define("Automatons/nodes/2003", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2003,
    type: "nodes",
    attributes: {
      name: "Comcast Business - State Dropdown",
      type: "survey",
      state_hash: ["AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WI", "WV", "WY"],
      template: "template::2017",
      transitions: {
        routeToChat: [{
          condition: "['AZ','CA','CO','MN','MO','NM','OR','UT','TX','WA','WI','KS'].indexOf(api.forms.State) > -1",
          target: "node::2006"
        }, {
          condition: "['IN','IL','MI','AL','AR','FL','GA','KY','LA','TN','AK','MS','SC'].indexOf(api.forms.State) > -1",
          target: "node::2007"
        }, {
          condition: "['MD','OH','PA','WV','VA','DC','DE','VT','CT','MA','ME','NH','NJ','NY','NC','RI'].indexOf(api.forms.State) > -1",
          target: "node::2008"
        }, {
          target: "node::2017"
        }]
      }
    }
  };
});
define("Automatons/nodes/2004", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2004,
    type: "nodes",
    attributes: {
      name: "Comcast Business - Sales Unavailable Node",
      type: "unavailable",
      template: "template::2003"
    }
  };
});
define("Automatons/nodes/2005", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2005,
    type: "nodes",
    attributes: {
      name: "Agent Group - Comcast Business",
      type: "chat",
      chatRouter: {
        checkAgentAvailability: false
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2006", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2006,
    type: "nodes",
    attributes: {
      name: "Agent Group - CBS_WEST",
      type: "chat",
      chatRouter: {
        agentGroup: 10005279,
        agentsBusyNode: "node::2009",
        businessUnit: 19001007,
        checkAgentAvailability: true,
        clientOutcome: "Live product specialists are here to help. What questions can we answer for you today?",
        outsideHopNode: "node::2009"
      },
      deferChatRouting: true,
      isOutcomeNode: 1,
      onEntry: function onEntry() {
        if (api.flashVars.deviceType == "Standard") {
          api.engageChat({
            scriptTreeId: 12201218
          });
        } else {
          api.engageChat({
            scriptTreeId: 12201223
          });
        }
      }
    }
  };
});
define("Automatons/nodes/2007", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2007,
    type: "nodes",
    attributes: {
      name: "Agent Group - CBS_CENTRAL",
      type: "chat",
      chatRouter: {
        agentGroup: 10005277,
        agentsBusyNode: "node::2009",
        businessUnit: 19001007,
        checkAgentAvailability: true,
        clientOutcome: "Live product specialists are here to help. What questions can we answer for you today?",
        outsideHopNode: "node::2009"
      },
      deferChatRouting: true,
      isOutcomeNode: 1,
      onEntry: function onEntry() {
        if (api.flashVars.deviceType == "Standard") {
          api.engageChat({
            scriptTreeId: 12201219
          });
        } else {
          api.engageChat({
            scriptTreeId: 12201222
          });
        }
      }
    }
  };
});
define("Automatons/nodes/2008", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2008,
    type: "nodes",
    attributes: {
      name: "Agent Group - CBS_NORTHEAST",
      type: "chat",
      chatRouter: {
        agentGroup: 10005278,
        agentsBusyNode: "node::2009",
        businessUnit: 19001007,
        checkAgentAvailability: true,
        clientOutcome: "Live product specialists are here to help. What questions can we answer for you today?",
        outsideHopNode: "node::2009"
      },
      deferChatRouting: true,
      isOutcomeNode: 1,
      onEntry: function onEntry() {
        if (api.flashVars.deviceType == "Standard") {
          api.engageChat({
            scriptTreeId: 12200399
          });
        } else {
          api.engageChat({
            scriptTreeId: 200033
          });
        }
      }
    }
  };
});
define("Automatons/nodes/2009", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2009,
    type: "nodes",
    attributes: {
      name: "Agent Group - CBS_AFTERHOURS",
      type: "chat",
      chatRouter: {
        agentGroup: 10005299,
        agentsBusyNode: "node::2004",
        businessUnit: 19001007,
        checkAgentAvailability: true,
        clientOutcome: "Live product specialists are here to help. What questions can we answer for you today?",
        outsideHopNode: "node::2004"
      },
      deferChatRouting: true,
      isOutcomeNode: 1,
      onEntry: function onEntry() {
        if (api.flashVars.deviceType == "Standard") {
          api.engageChat({
            scriptTreeId: 12201220
          });
        } else {
          api.engageChat({
            scriptTreeId: 12201221
          });
        }
      }
    }
  };
});
define("Automatons/nodes/2010", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2010,
    type: "nodes",
    attributes: {
      name: "Redirect - Help and Support",
      type: "redirect",
      isExitNode: 1,
      isOutcomeNode: 1,
      outcomeMessage: "Redirected to https://businesshelp.comcast.com/help-and-support",
      redirectTarget: "current",
      redirectUrl: "https://businesshelp.comcast.com/help-and-support"
    }
  };
});
define("Automatons/nodes/2012", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2012,
    type: "nodes",
    attributes: {
      name: "Comcast Post Chat Survey",
      type: "survey",
      formify: {
        fields: [{
          id: "overall-satisfaction",
          type: "select",
          label: "Overall, how satisfied are you with XFINITY from Comcast?",
          options: ["5 - Highly Satisfied", "4", "3", "2", "1 - Highly Dissatisfied"],
          placeholder: "Please select one ...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          fields: [{
            id: "likely-to-recommend",
            type: "select",
            label: "Thinking about your chat experience today, how likely are you to recommend XFINITY from Comcast's chat customer service to friends and family?",
            options: ["10 - Extremely likely", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0 - Not at all likely"],
            placeholder: "Please select one ...",
            required: true,
            requiredError: "Please answer the following question:"
          }, {
            id: "why-recommend",
            type: "textarea",
            label: "Why?",
            required: true,
            requiredError: "Please answer the following question:"
          }],
          group: "likely-to-recommend-and-why"
        }, {
          id: "affect-recommend-likelihood",
          type: "select",
          label: "How did your experience online today affect your overall likelihood to recommend XFINITY from Comcast?",
          options: ["Increased a lot", "Increased a little", "No change", "Decreased a little", "Decreased a lot"],
          placeholder: "Please select one ...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          fields: [{
            id: "main-reason-for-using-chat",
            type: "select",
            label: "Which of the following best describes the main reason for using chat customer service today?",
            options: ["Compare to the competition", "Find programming/channel information", "Learn more about products/services (special offers, promotions, pricing, etc.)", "Upgrade or add to my existing XFINITY services", "Downgrade or cancel my existing XFINITY services", "Obtain technical support", "Obtain billing support", "Obtain other customer support", "Subscribe new services", "Other"],
            placeholder: "Please select one ...",
            required: true,
            requiredError: "Please answer the following question:"
          }, {
            id: "other-main-reason-for-using-chat",
            type: "textarea",
            dynamic: {
              check: "main-reason-for-using-chat",
              logic: "equals",
              value: "Other"
            },
            label: "Please specify:",
            required: true,
            requiredError: "Please answer the following question:"
          }],
          group: "main-reason-and-other"
        }, {
          id: "achieve-main-reason",
          type: "select",
          label: "Did customer chat service help you achieve the main reason for visiting the website today?",
          options: ["Yes", "No"],
          placeholder: "Please select one ...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "improve-chat-service",
          type: "textarea",
          label: "What is one thing that can be improved about Xfinity from Comcast's chat customer service?"
        }, {
          fields: [{
            id: "receive-call-back",
            type: "select",
            dynamic: {
              check: "likely-to-recommend",
              logic: "any",
              value: "10;9;6;5;4;3;2;1;0"
            },
            exposureRate: 50,
            label: "Would you be willing to receive a call back about your feedback today?",
            options: ["Yes", "No"]
          }, {
            id: "phone-number",
            type: "text",
            dynamic: {
              check: "receive-call-back",
              logic: "equals",
              value: "Yes"
            },
            label: "Phone number:"
          }],
          group: "receive-call-back-and-phone-number"
        }],
        heading: "We value your opinion and appreciate you taking a few moments to complete this brief survey.",
        next: "submit"
      },
      surveyAlerts: [{
        name: "Comcast - Survey Response Alert - Detractor",
        conditions: {
          or: ["likely-to-recommend contains any 8, 7, 6, 5, 4, 3, 2", "likely-to-recommend equals 1", "likely-to-recommend equals 0 - Not at all likely"]
        },
        emailSpecName: "Detractor",
        emailSubject: "Comcast - Survey Response Alert - Detractor",
        emailTemplate: "template::2004"
      }, {
        name: "Comcast - Survey Response Alert - Promoter",
        conditions: ["likely-to-recommend contains any 10 - Extremely likely, 9"],
        emailSpecName: "Promoter",
        emailSubject: "Comcast - Survey Response Alert - Promoter",
        emailTemplate: "template::2004"
      }],
      template: "template::2022",
      transitions: {
        submit: {
          target: "node::2013"
        }
      }
    }
  };
});
define("Automatons/nodes/2013", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2013,
    type: "nodes",
    attributes: {
      name: "Comcast Post Chat Survey Thank You",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2018"
    }
  };
});
define("Automatons/nodes/2014", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2014,
    type: "nodes",
    attributes: {
      name: "Comcast Business - Unavailable Change Existing Service",
      type: "unavailable",
      template: "template::2003"
    }
  };
});
define("Automatons/nodes/2017", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2017,
    type: "nodes",
    attributes: {
      name: "Comcast Business - OOF Unavailable Node",
      type: "unavailable",
      template: "template::2023"
    }
  };
});
define("Automatons/nodes/2018", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2018,
    type: "nodes",
    attributes: {
      name: "Comcast Business - CAM Unavailable Node",
      type: "unavailable",
      template: "template::2003"
    }
  };
});
define("Automatons/nodes/2019", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2019,
    type: "nodes",
    attributes: {
      name: "Comcast Business - Care Unavailable Node",
      type: "unavailable",
      template: "template::2024"
    }
  };
});
define("Automatons/nodes/2020", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2020,
    type: "nodes",
    attributes: {
      name: "Agent Group - CBS_AFTERHOURS_CAM",
      type: "chat",
      chatRouter: {
        agentGroup: 10006390,
        agentsBusyNode: "node::2018",
        businessUnit: 19001007,
        checkAgentAvailability: true,
        clientOutcome: "Live product specialists are here to help. What questions can we answer for you today?",
        outsideHopNode: "node::2018"
      },
      deferChatRouting: true,
      isOutcomeNode: 1,
      onEntry: function onEntry() {
        if (api.flashVars.deviceType == "Standard") {
          api.engageChat({
            scriptTreeId: 12201220
          });
        } else {
          api.engageChat({
            scriptTreeId: 12201221
          });
        }
      }
    }
  };
});
define("Automatons/nodes/2021", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2021,
    type: "nodes",
    attributes: {
      name: "Comcast Business Care Prechat Survey",
      type: "routing",
      onExit: function onExit() {
        api.fireCustomEvent("setIssueType", {
          customerSelection: api.forms["customerSelection"]
        });
      },
      template: "template::2025",
      transitions: {
        next: [{
          condition: "api.forms['customerSelection'] === 'Add a new service'",
          target: "node::2022"
        }, {
          condition: "api.forms['customerSelection'] === 'Billing issue' || api.forms['customerSelection'] === 'Service issue' || api.forms['customerSelection'] === 'Change existing service'",
          target: "node::2023"
        }, {
          condition: "api.forms['customerSelection'] === 'Renew or disconnect service'",
          target: "node::2033"
        }]
      }
    }
  };
});
define("Automatons/nodes/2022", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2022,
    type: "nodes",
    attributes: {
      name: "Comcast Business Care Prechat Sales Routing",
      type: "routing",
      onEntry: function onEntry() {
        api.setTimeout(function () {
          api.triggerTransition('routeToChat');
        }, 100);
      },
      transitions: {
        routeToChat: [{
          condition: "['AZ','CA','CO','MN','MO','NM','OR','UT','TX','WA','WI','KS'].indexOf(window.top.digitalData.user[0].segment.serviceState) > -1",
          target: "node::2024"
        }, {
          condition: "['IN','IL','MI','AL','AR','FL','GA','KY','LA','TN','AK','MS','SC'].indexOf(window.top.digitalData.user[0].segment.serviceState) > -1",
          target: "node::2025"
        }, {
          condition: "['MD','OH','PA','WV','VA','DC','DE','VT','CT','MA','ME','NH','NJ','NY','NC','RI'].indexOf(window.top.digitalData.user[0].segment.serviceState) > -1",
          target: "node::2026"
        }]
      }
    }
  };
});
define("Automatons/nodes/2023", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2023,
    type: "nodes",
    attributes: {
      name: "Comcast Business Care Prechat Care Routing",
      type: "routing",
      onEntry: function onEntry() {
        api.setTimeout(function () {
          api.triggerTransition('routeToChat');
        }, 100);
      },
      transitions: {
        routeToChat: [{
          condition: "['AZ','CA','CO','MN','MO','NM','OR','UT','TX','WA','WI','KS'].indexOf(window.top.digitalData.user[0].segment.serviceState) > -1",
          target: "node::2029"
        }, {
          condition: "['IN','IL','MI','AL','AR','FL','GA','KY','LA','TN','AK','MS','SC'].indexOf(window.top.digitalData.user[0].segment.serviceState) > -1",
          target: "node::2030"
        }, {
          condition: "['MD','OH','PA','WV','VA','DC','DE','VT','CT','MA','ME','NH','NJ','NY','NC','RI'].indexOf(window.top.digitalData.user[0].segment.serviceState) > -1",
          target: "node::2031"
        }]
      }
    }
  };
});
define("Automatons/nodes/2024", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2024,
    type: "nodes",
    attributes: {
      name: "Comcast Business Care - Agent Group - CBS_WEST",
      type: "chat",
      chatRouter: {
        agentGroup: 10005279,
        agentsBusyNode: "node::2027",
        businessUnit: 19001007,
        checkAgentAvailability: true,
        outsideHopNode: "node::2027",
        qThreshold: 999
      },
      deferChatRouting: true,
      isOutcomeNode: 1,
      onEntry: function onEntry() {
        var formData = api.getFormData();
        var autoOpener = "Live support agents are here to help. What questions can we answer for you today?";

        if (api.flashVars.deviceType == "Standard") {
          api.engageChat({
            scriptTreeId: 12201218,
            formData: formData,
            autoOpener: autoOpener
          });
        } else {
          api.engageChat({
            scriptTreeId: 12201223,
            formData: formData,
            autoOpener: autoOpener
          });
        }
      }
    }
  };
});
define("Automatons/nodes/2025", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2025,
    type: "nodes",
    attributes: {
      name: "Comcast Business Care - Agent Group - CBS_CENTRAL",
      type: "chat",
      chatRouter: {
        agentGroup: 10005277,
        agentsBusyNode: "node::2027",
        businessUnit: 19001007,
        checkAgentAvailability: true,
        outsideHopNode: "node::2027",
        qThreshold: 999
      },
      deferChatRouting: true,
      isOutcomeNode: 1,
      onEntry: function onEntry() {
        var formData = api.getFormData();
        var autoOpener = "Live support agents are here to help. What questions can we answer for you today?";

        if (api.flashVars.deviceType == "Standard") {
          api.engageChat({
            scriptTreeId: 12201219,
            formData: formData,
            autoOpener: autoOpener
          });
        } else {
          api.engageChat({
            scriptTreeId: 12201222,
            formData: formData,
            autoOpener: autoOpener
          });
        }
      }
    }
  };
});
define("Automatons/nodes/2026", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2026,
    type: "nodes",
    attributes: {
      name: "Comcast Business Care - Agent Group - CBS_NORTHEAST",
      type: "chat",
      chatRouter: {
        agentGroup: 10005278,
        agentsBusyNode: "node::2027",
        businessUnit: 19001007,
        checkAgentAvailability: true,
        outsideHopNode: "node::2027",
        qThreshold: 999
      },
      deferChatRouting: true,
      isOutcomeNode: 1,
      onEntry: function onEntry() {
        var formData = api.getFormData();
        var autoOpener = "Live support agents are here to help. What questions can we answer for you today?";

        if (api.flashVars.deviceType == "Standard") {
          api.engageChat({
            scriptTreeId: 12200399,
            formData: formData,
            autoOpener: autoOpener
          });
        } else {
          api.engageChat({
            scriptTreeId: 200033,
            formData: formData,
            autoOpener: autoOpener
          });
        }
      }
    }
  };
});
define("Automatons/nodes/2027", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2027,
    type: "nodes",
    attributes: {
      name: "Comcast Business Care - Agent Group - CBS_AFTERHOURS",
      type: "chat",
      chatRouter: {
        agentGroup: 10005299,
        agentsBusyNode: "node::2032",
        businessUnit: 19001007,
        checkAgentAvailability: true,
        outsideHopNode: "node::2028",
        qThreshold: 999
      },
      deferChatRouting: true,
      isOutcomeNode: 1,
      onEntry: function onEntry() {
        var formData = api.getFormData();
        var autoOpener = "Live support agents are here to help. What questions can we answer for you today?";

        if (api.flashVars.deviceType == "Standard") {
          api.engageChat({
            scriptTreeId: 12201220,
            formData: formData,
            autoOpener: autoOpener
          });
        } else {
          api.engageChat({
            scriptTreeId: 12201221,
            formData: formData,
            autoOpener: autoOpener
          });
        }
      }
    }
  };
});
define("Automatons/nodes/2028", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2028,
    type: "nodes",
    attributes: {
      name: "Comcast Business Care - CBS Unavailable Node",
      type: "unavailable",
      isOutcomeNode: 1,
      template: "template::2026"
    }
  };
});
define("Automatons/nodes/2029", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2029,
    type: "nodes",
    attributes: {
      name: "Comcast Business Care - Agent Group - CBC_West",
      type: "chat",
      chatRouter: {
        agentGroup: 10006448,
        agentsBusyNode: "node::2032",
        businessUnit: 19001168,
        checkAgentAvailability: true,
        outsideHopNode: "node::2028",
        qThreshold: 999
      },
      deferChatRouting: true,
      isOutcomeNode: 1,
      onEntry: function onEntry() {
        var formData = api.getFormData();
        var autoOpener = "Live support agents are here to help. What questions can we answer for you today?";

        api.engageChat({
          scriptTreeId: 12201342,
          formData: formData,
          autoOpener: autoOpener
        });
      }
    }
  };
});
define("Automatons/nodes/2030", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2030,
    type: "nodes",
    attributes: {
      name: "Comcast Business Care Agent Group CBC_Central",
      type: "chat",
      chatRouter: {
        agentGroup: 10006450,
        agentsBusyNode: "node::2032",
        businessUnit: 19001168,
        checkAgentAvailability: true,
        outsideHopNode: "node::2028",
        qThreshold: 999
      },
      deferChatRouting: true,
      isOutcomeNode: 1,
      onEntry: function onEntry() {
        var formData = api.getFormData();
        var autoOpener = "Live support agents are here to help. What questions can we answer for you today?";

        api.engageChat({
          scriptTreeId: 12201342,
          formData: formData,
          autoOpener: autoOpener
        });
      }
    }
  };
});
define("Automatons/nodes/2031", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2031,
    type: "nodes",
    attributes: {
      name: "Comcast Business Care Agent Group CBC_Northeast",
      type: "chat",
      chatRouter: {
        agentGroup: 10006449,
        agentsBusyNode: "node::2032",
        businessUnit: 19001168,
        checkAgentAvailability: true,
        outsideHopNode: "node::2028",
        qThreshold: 999
      },
      deferChatRouting: true,
      isOutcomeNode: 1,
      onEntry: function onEntry() {
        var formData = api.getFormData();
        var autoOpener = "Live support agents are here to help. What questions can we answer for you today?";

        api.engageChat({
          scriptTreeId: 12201342,
          formData: formData,
          autoOpener: autoOpener
        });
      }
    }
  };
});
define("Automatons/nodes/2032", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2032,
    type: "nodes",
    attributes: {
      name: "Comcast Business Care - CBS Busy Node",
      type: "unavailable",
      isOutcomeNode: 1,
      template: "template::2027"
    }
  };
});
define("Automatons/nodes/2033", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2033,
    type: "nodes",
    attributes: {
      name: "Comcast Business Care Re-Contract/Disconnect",
      type: "help",
      isOutcomeNode: 1,
      template: "template::2028"
    }
  };
});
define("Automatons/nodes/2034", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2034,
    type: "nodes",
    attributes: {
      name: "Comcast Business - Care State Dropdown",
      type: "survey",
      state_hash: ["AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WI", "WV", "WY"],
      template: "template::2017",
      transitions: {
        routeToChat: [{
          condition: "['AZ','CA','CO','MN','MO','NM','OR','UT','TX','WA','WI','KS'].indexOf(api.forms.State) > -1",
          target: "node::2035"
        }, {
          condition: "['IN','IL','MI','AL','AR','FL','GA','KY','LA','TN','AK','MS','SC'].indexOf(api.forms.State) > -1",
          target: "node::2036"
        }, {
          condition: "['MD','OH','PA','WV','VA','DC','DE','VT','CT','MA','ME','NH','NJ','NY','NC','RI'].indexOf(api.forms.State) > -1",
          target: "node::2037"
        }, {
          target: "node::2038"
        }]
      }
    }
  };
});
define("Automatons/nodes/2035", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2035,
    type: "nodes",
    attributes: {
      name: "Agent Group - CBC_WEST",
      type: "chat",
      chatRouter: {
        agentGroup: 10006448,
        agentsBusyNode: "node::2019",
        businessUnit: 19001168,
        checkAgentAvailability: true,
        clientOutcome: "To chat with a Care representative, please sign in to your Comcast Business account <a style='color:#fff' href='https://login.xfinity.com/login?r=commercial'>here</a>",
        outsideHopNode: "node::2019",
        qThreshold: 999
      },
      deferChatRouting: true,
      isOutcomeNode: 1,
      onEntry: function onEntry() {
        api.engageChat({
          scriptTreeId: 12201342
        });
      }
    }
  };
});
define("Automatons/nodes/2036", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2036,
    type: "nodes",
    attributes: {
      name: "Agent Group - CBC_CENTRAL",
      type: "chat",
      chatRouter: {
        agentGroup: 10006450,
        agentsBusyNode: "node::2019",
        businessUnit: 19001168,
        checkAgentAvailability: true,
        clientOutcome: "To chat with a Care representative, please sign in to your Comcast Business account <a style='color:#fff' href='https://login.xfinity.com/login?r=commercial'>here</a>",
        outsideHopNode: "node::2019",
        qThreshold: 999
      },
      deferChatRouting: true,
      isOutcomeNode: 1,
      onEntry: function onEntry() {
        api.engageChat({
          scriptTreeId: 12201342
        });
      }
    }
  };
});
define("Automatons/nodes/2037", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2037,
    type: "nodes",
    attributes: {
      name: "Agent Group - CBC_NORTHEAST",
      type: "chat",
      chatRouter: {
        agentGroup: 10006449,
        agentsBusyNode: "node::2019",
        businessUnit: 19001168,
        checkAgentAvailability: true,
        clientOutcome: "To chat with a Care representative, please sign in to your Comcast Business account <a style='color:#fff' href='https://login.xfinity.com/login?r=commercial'>here</a>",
        outsideHopNode: "node::2019",
        qThreshold: 999
      },
      deferChatRouting: true,
      isOutcomeNode: 1,
      onEntry: function onEntry() {
        api.engageChat({
          scriptTreeId: 12201342
        });
      }
    }
  };
});
define("Automatons/nodes/2038", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2038,
    type: "nodes",
    attributes: {
      name: "Comcast Business - Care OOF Unavailable Node",
      type: "unavailable",
      template: "template::2023"
    }
  };
});
define("Automatons/nodes/2040", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2040,
    type: "nodes",
    attributes: {
      name: "Comcast Business - Change existing services - redirect",
      type: "routing",
      onEntry: function onEntry() {
        var division = top.inqCustData ? top.inqCustData.division : '';

        if (division === "WestDivision") {
          api.triggerTransition('redirectWestDivision');
        } else if (division === "CentralDivision") {
          api.triggerTransition('redirectToCentral');
        } else if (division === "NorthEastDivision") {
          api.triggerTransition('redirectNorthEastDivision');
        } else {
          api.triggerTransition('redirectAfterHours');
        }
      },
      transitions: {
        redirectAfterHours: [{
          target: "node::2020"
        }],
        redirectNorthEastDivision: [{
          target: "node::2043"
        }],
        redirectToCentral: [{
          target: "node::2042"
        }],
        redirectWestDivision: [{
          target: "node::2041"
        }]
      }
    }
  };
});
define("Automatons/nodes/2041", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2041,
    type: "nodes",
    attributes: {
      name: "Agent Group - CBS_WEST_CAM",
      type: "chat",
      chatRouter: {
        agentGroup: 10006645,
        agentsBusyNode: "node::2020",
        businessUnit: 19001007,
        checkAgentAvailability: true,
        clientOutcome: "Live product specialists are here to help. What questions can we answer for you today?",
        outsideHopNode: "node::2020",
        scriptTreeId: 12201220
      },
      deferChatRouting: true,
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2042", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2042,
    type: "nodes",
    attributes: {
      name: "Agent Group - CBS_CENTRAL_CAM",
      type: "chat",
      chatRouter: {
        agentGroup: 10006646,
        agentsBusyNode: "node::2020",
        businessUnit: 19001007,
        checkAgentAvailability: true,
        clientOutcome: "Live product specialists are here to help. What questions can we answer for you today?",
        outsideHopNode: "node::2020",
        scriptTreeId: 12201220
      },
      deferChatRouting: true,
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2043", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2043,
    type: "nodes",
    attributes: {
      name: "Agent Group - CBS_NED_CAM",
      type: "chat",
      chatRouter: {
        agentGroup: 10006644,
        agentsBusyNode: "node::2020",
        businessUnit: 19001007,
        checkAgentAvailability: true,
        clientOutcome: "Live product specialists are here to help. What questions can we answer for you today?",
        outsideHopNode: "node::2020",
        scriptTreeId: 12201220
      },
      deferChatRouting: true,
      isOutcomeNode: 1
    }
  };
});
define('Automatons/styles/2001', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {    /* CSS Reset */  /* Icon - Chevron Right */}#viewport html,#viewport body,#viewport div,#viewport span,#viewport applet,#viewport object,#viewport iframe,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport p,#viewport blockquote,#viewport pre,#viewport a,#viewport abbr,#viewport acronym,#viewport address,#viewport big,#viewport cite,#viewport code,#viewport del,#viewport dfn,#viewport em,#viewport img,#viewport ins,#viewport kbd,#viewport q,#viewport s,#viewport samp,#viewport small,#viewport strike,#viewport strong,#viewport sub,#viewport sup,#viewport tt,#viewport var,#viewport b,#viewport u,#viewport i,#viewport center,#viewport dl,#viewport dt,#viewport dd,#viewport ol,#viewport ul,#viewport li,#viewport fieldset,#viewport form,#viewport label,#viewport legend,#viewport table,#viewport caption,#viewport tbody,#viewport tfoot,#viewport thead,#viewport tr,#viewport th,#viewport td,#viewport article,#viewport aside,#viewport canvas,#viewport details,#viewport embed,#viewport figure,#viewport figcaption,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport output,#viewport ruby,#viewport section,#viewport summary,#viewport time,#viewport mark,#viewport audio,#viewport video {  margin: 0;  padding: 0;  border: 0;  font-size: 100%;  font: inherit;  vertical-align: baseline;}#viewport article,#viewport aside,#viewport details,#viewport figcaption,#viewport figure,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport section {  display: block;}#viewport body {  line-height: 1;}#viewport ol,#viewport ul {  list-style: none;}#viewport blockquote,#viewport q {  quotes: none;}#viewport blockquote:before,#viewport blockquote:after,#viewport q:before,#viewport q:after {  content: "";  content: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport #view-container {  font-family: "proxima-nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif;  padding: 15px 15px 10px 15px;}#viewport a {  text-decoration: none;  color: #21a2fc;  font-weight: bold;}#viewport p {  color: #556063;}#viewport .header {  color: #22455D;  margin: 0 0 8px 0;  font-weight: bold;  line-height: 20px;  font-size: 18px;}#viewport .header-light {  font-size: 20px;  padding-bottom: 10px;}#viewport button,#viewport input[type="submit"] {  position: relative;  background-color: #0e79c4;  fill: #469AD9;  color: white;  box-sizing: border-box;  width: 100%;  cursor: pointer;  border: 0;  border-radius: 3px;  margin: 5px 0;  font-weight: bold;  -moz-transition: background-color 0.2s ease-in-out 0s;  -o-transition: background-color 0.2s ease-in-out 0s;  -webkit-transition: background-color 0.2s ease-in-out;  -webkit-transition-delay: 0s;  transition: background-color 0.2s ease-in-out 0s;}#viewport button p,#viewport input[type="submit"] p {  font-size: 18px;  margin: 5px 0;  color: white;}#viewport button small,#viewport input[type="submit"] small {  font-weight: normal;  font-size: smaller;}#viewport button.btn-lg,#viewport input[type="submit"].btn-lg {  font-size: 16px;  padding: 15px;}#viewport button.btn-md,#viewport input[type="submit"].btn-md {  font-size: 12px;  padding: 12px;}#viewport button:hover,#viewport input[type="submit"]:hover {  background-color: #21a2fc;}#viewport button:hover .icon-chevron-right,#viewport input[type="submit"]:hover .icon-chevron-right {  margin-left: 8px;}#viewport form fieldset {  position: relative;  margin-bottom: 15px;  padding-right: 27px;  float: left;  width: 150px;}#viewport form label.placeholder-label {  z-index: 2;  position: absolute;  top: 17px;  left: 0;  color: #545f62;  font-size: 14px;  line-height: 1;  padding-left: 15px;  transition: all .2s ease;}#viewport form .styled-select {  position: relative;}#viewport form .styled-select select {  background-color: #f7f7f7;  font-size: 18px;  height: 50px;  width: 100%;  box-sizing: border-box;  padding-top: 10px;  padding-left: 13px;  border: 1px solid #ccc;  border-radius: 3px;  color: #082f4a;  cursor: pointer;}#viewport form .styled-select::after {  position: absolute;  top: 1px;  right: 0;  display: block;  content: "";  width: 45px;  height: 48px;  background-color: #f7f7f7;  background-repeat: no-repeat;  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAKCAMAAACzB5/1AAAAJ1BMVEWDl6SyvsYnSWHg5ehlfY6isbtGY3c2Vmzw8vQXPFXR2N0IL0r///+dn/JSAAAADXRSTlP///////////////8APegihgAAAEhJREFUeAFVykkOgFAIBFH0DwzU/c9r7JioteKRNn4Ze/FUuwzvQsWZwxiZJXkfGFR6ALMXN1m9wXoi6tRL1LA9XuI5+DAKdQGl8gWkMrEIZQAAAABJRU5ErkJggg==);  background-position: 14px 22px;  border-left: 1px solid #ccc;  border-right: 1px solid #ccc;  pointer-events: none;}#viewport form .invalid-message {  color: #fe5438;  visibility: none;  opacity: 0;  font-weight: bold;  font-size: 11px;  padding-top: 5px;  padding-left: 15px;  -moz-transition: opacity 0.2s ease-in-out 0s;  -o-transition: opacity 0.2s ease-in-out 0s;  -webkit-transition: opacity 0.2s ease-in-out;  -webkit-transition-delay: 0s;  transition: opacity 0.2s ease-in-out 0s;}#viewport form fieldset.focus label.placeholder-label,#viewport form fieldset.valid label.placeholder-label {  top: 7px;  font-size: 10px;  color: #000;}#viewport form fieldset.focus .styled-select select,#viewport form fieldset.valid .styled-select select {  background-color: #fff;}#viewport form fieldset.focus .styled-select::after,#viewport form fieldset.valid .styled-select::after {  background-color: #fff;}#viewport form fieldset.invalid .styled-select select {  border-color: #fe5438;}#viewport form fieldset.invalid .styled-select::after {  border-color: #fe5438;}#viewport form fieldset.invalid select {  border-left-width: 5px;}#viewport form fieldset.invalid .invalid-message {  visibility: visible;  opacity: 1;}#viewport form.form-invalid .invalid-message {  text-align: right;  visibility: visible;  opacity: 1;}#viewport ul {  text-align: left;}#viewport ul li button {  text-align: inherit;}#viewport ul li button .icon-chevron-right {  position: absolute;  right: 16px;  top: 8px;}#viewport footer {  position: absolute;  left: 15px;  right: 15px;  bottom: 15px;}#viewport .icon-chevron-right {  margin-left: 5px;  height: 24px;  width: 24px;  vertical-align: bottom;  display: inline-block;  -moz-transition: margin-left 0.2s ease-in-out 0s;  -o-transition: margin-left 0.2s ease-in-out 0s;  -webkit-transition: margin-left 0.2s ease-in-out;  -webkit-transition-delay: 0s;  transition: margin-left 0.2s ease-in-out 0s;}#viewport .icon-chevron-right div {  display: inline-block;  vertical-align: middle;}';
});
define('Automatons/styles/2004', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {    /* base formify styles */}#viewport html,#viewport body,#viewport div,#viewport span,#viewport applet,#viewport object,#viewport iframe,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport p,#viewport blockquote,#viewport pre,#viewport a,#viewport abbr,#viewport acronym,#viewport address,#viewport big,#viewport cite,#viewport code,#viewport del,#viewport dfn,#viewport em,#viewport img,#viewport ins,#viewport kbd,#viewport q,#viewport s,#viewport samp,#viewport small,#viewport strike,#viewport strong,#viewport sub,#viewport sup,#viewport tt,#viewport var,#viewport b,#viewport u,#viewport i,#viewport center,#viewport dl,#viewport dt,#viewport dd,#viewport ol,#viewport ul,#viewport li,#viewport fieldset,#viewport form,#viewport label,#viewport legend,#viewport table,#viewport caption,#viewport tbody,#viewport tfoot,#viewport thead,#viewport tr,#viewport th,#viewport td,#viewport article,#viewport aside,#viewport canvas,#viewport details,#viewport embed,#viewport figure,#viewport figcaption,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport output,#viewport ruby,#viewport section,#viewport summary,#viewport time,#viewport mark,#viewport audio,#viewport video {  margin: 0;  padding: 0;  border: 0;  font-size: 100%;  font: inherit;  vertical-align: baseline;}#viewport article,#viewport aside,#viewport details,#viewport figcaption,#viewport figure,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport section {  display: block;}#viewport body {  line-height: 1;}#viewport ol,#viewport ul {  list-style: none;}#viewport blockquote,#viewport q {  quotes: none;}#viewport blockquote:before,#viewport blockquote:after,#viewport q:before,#viewport q:after {  content: "";  content: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport a,#viewport blockquote,#viewport button,#viewport fieldset,#viewport form,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport input,#viewport legend,#viewport li,#viewport ol,#viewport p,#viewport pre,#viewport td,#viewport textarea,#viewport th,#viewport ul {  margin: 0;  padding: 0;  border: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport fieldset,#viewport img {  border: 0;}#viewport em,#viewport strong,#viewport th {  font-style: normal;  font-weight: normal;}#viewport ol,#viewport ul {  list-style: none;}#viewport th {  text-align: left;}#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6 {  font-size: 100%;  font-weight: normal;}#viewport abbr,#viewport acronym {  border: 0;  font-variant: normal;}#viewport sup {  vertical-align: text-top;}#viewport sub {  vertical-align: text-bottom;}#viewport input,#viewport select,#viewport textarea {  font-family: inherit;  font-size: inherit;  font-weight: inherit;}#viewport input,#viewport select,#viewport textarea {  *font-size: 100%;}#viewport .view-container {  -webkit-box-sizing: border-box;  -moz-box-sizing: border-box;  box-sizing: border-box;}#viewport *,#viewport *:after,#viewport *:before,#viewport [class*="formify-"] {  -webkit-box-sizing: inherit;  -moz-box-sizing: inherit;  box-sizing: inherit;}#viewport .view-container {  overflow-y: auto;  position: absolute;  top: 0;  bottom: 0;  right: 0;  left: 0;  padding: 20px;}#viewport .formify-form-body {  display: block;  margin-bottom: 1em;}#viewport .formify-heading {  font-weight: bold;  margin-bottom: 1em;  font-size: 1.125em;  line-height: 1.4em;}#viewport .formify-header {  display: block;  height: auto;  margin-bottom: 1em;}#viewport .formify-fieldset-radio .formify-label,#viewport .formify-fieldset-checkbox .formify-label {  display: block;  float: left;  clear: left;  margin: 0.5em 0;  vertical-align: middle;}#viewport .formify-fieldset-radio .formify-label .formify-input,#viewport .formify-fieldset-checkbox .formify-label .formify-input,#viewport .formify-fieldset-radio .formify-label span,#viewport .formify-fieldset-checkbox .formify-label span {  display: inline-block;  vertical-align: middle;}#viewport .formify-fieldset-radio .formify-label span,#viewport .formify-fieldset-checkbox .formify-label span {  margin-left: 0.125em;}#viewport .formify-fieldset-inline .formify-label {  clear: none;  margin: 0.5em 1.5em 0.5em 0;}#viewport .formify-legend {  float: left;  width: 100%;  margin-bottom: 1em;}#viewport .formify-scale-statement .formify-legend {  margin-bottom: 0;  padding: 0.25em 0;}#viewport .formify-label,#viewport .formify-legend {  font-weight: normal;  font-size: 1em;  line-height: 1.4em;}#viewport .formify-fieldset-email .formify-input,#viewport .formify-fieldset-select .formify-input,#viewport .formify-fieldset-text .formify-input,#viewport .formify-fieldset-textarea .formify-input {  margin-top: 0.5em;  clear: left;  background-color: white;  border: 1px solid #aaa;  display: block;  border-radius: 3px;  padding: 0.25em;  width: 100%;}@media only screen and (min-width: 320px) {  #viewport .formify-input {    max-width: 240px;  }}#viewport .formify-fieldset-textarea .formify-input {  width: 100%;  max-width: 100%;  height: 180px;}#viewport .formify-fieldset-radio .formify-input,#viewport .formify-fieldset-checkbox .formify-input,#viewport .formify-fieldset-radio .formify-label,#viewport .formify-fieldset-checkbox .formify-label,#viewport .formify-scale-input,#viewport .formify-scale-option,#viewport .formify-select .formify-input,#viewport .formify-submit {  cursor: pointer;}#viewport .formify-submit {  display: block;  width: 100%;  padding: 1em;  border-radius: 3px;  background: #666;  color: #fff;  margin-left: auto;  margin-right: auto;}#viewport .formify-submit:focus {  outline-offset: -4px;  outline: 1px dotted #000;}#viewport .formify-group {  display: block;  position: static;  border-top: 1px solid #ccc;  padding: 10px 0;  margin: 0;}#viewport .formify-group [class*="formify-fieldset"] {  border-top: 0;}#viewport [class*="formify-fieldset"] {  padding: 10px 0;  margin: 0;  position: relative;  border-top: 1px solid #ccc;}#viewport .formify-scale-row.formify-scale-header {  display: none;}#viewport .formify-scale-cell {  font-weight: normal;  display: block;  margin: 1em 0;  font-size: 1em;}#viewport .formify-scale-option span {  display: inline-block;  vertical-align: middle;}#viewport .formify-scale-input {  display: inline-block;  vertical-align: middle;}@media only screen and (min-width: 320px) {  #viewport .formify-scale-body {    margin-top: 1em;  }  #viewport .formify-scale-row {    margin-top: 0.5em;    display: table;    width: 100%;    border-collapse: collapse;  }  #viewport .formify-scale-row.formify-scale-header {    display: table;    margin-top: 1em;  }  #viewport .formify-scale-cell {    display: table-cell;    width: auto;    float: none;    text-align: center;    vertical-align: middle;  }  #viewport .formify-scale-statement {    display: table-cell;    width: 50%;    text-align: left;  }  #viewport .formify-scale-option span {    display: none;  }}#viewport #view-container {  font-size: 14px;  text-align: left;  font-family: sans-serif;}#viewport #view-container .formify-group > h2 {  display: none;}#viewport #view-container fieldset[class*="formify-fieldset"][acif-required="true"][class*="invalid"] {  padding-top: 30px;}#viewport #view-container textarea[class$="formify-input"] {  height: 100px;}#viewport #view-container p[acif-invalid="required"] {  position: absolute;  top: 10px;  color: #c6040b;  font-size: 0.85em;  font-style: italic;}#viewport #view-container fieldset[class*="formify-fieldset"][acif-required="true"] > label::after {  content: " *";  color: #c6040b;}#viewport #thankYou {  text-align: center;  display: table;  width: 100%;  height: 80%;}#viewport #thankYou .center-container {  display: table-cell;  vertical-align: middle;}#viewport #thankYou .lead {  color: #333;  margin-bottom: 20px;}#viewport #thankYou button {  border-radius: 3px;  border: 1px solid #ccc;  color: #000;  margin-top: 20px;  height: 20px;  width: 50px;}';
});
define('Automatons/styles/2005', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {    /* CSS Reset */}#viewport html,#viewport body,#viewport div,#viewport span,#viewport applet,#viewport object,#viewport iframe,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport p,#viewport blockquote,#viewport pre,#viewport a,#viewport abbr,#viewport acronym,#viewport address,#viewport big,#viewport cite,#viewport code,#viewport del,#viewport dfn,#viewport em,#viewport img,#viewport ins,#viewport kbd,#viewport q,#viewport s,#viewport samp,#viewport small,#viewport strike,#viewport strong,#viewport sub,#viewport sup,#viewport tt,#viewport var,#viewport b,#viewport u,#viewport i,#viewport center,#viewport dl,#viewport dt,#viewport dd,#viewport ol,#viewport ul,#viewport li,#viewport fieldset,#viewport form,#viewport label,#viewport legend,#viewport table,#viewport caption,#viewport tbody,#viewport tfoot,#viewport thead,#viewport tr,#viewport th,#viewport td,#viewport article,#viewport aside,#viewport canvas,#viewport details,#viewport embed,#viewport figure,#viewport figcaption,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport output,#viewport ruby,#viewport section,#viewport summary,#viewport time,#viewport mark,#viewport audio,#viewport video {  margin: 0;  padding: 0;  border: 0;  font-size: 100%;  font: inherit;  vertical-align: baseline;}#viewport article,#viewport aside,#viewport details,#viewport figcaption,#viewport figure,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport section {  display: block;}#viewport body {  line-height: 1;}#viewport ol,#viewport ul {  list-style: none;}#viewport blockquote,#viewport q {  quotes: none;}#viewport blockquote:before,#viewport blockquote:after,#viewport q:before,#viewport q:after {  content: "";  content: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport #view-container {  font-family: "proxima-nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif;  padding: 15px 15px 10px 15px;}#viewport #view-container .disconnect {  margin-top: 30px;  display: flex;}#viewport #view-container .disconnect .disconnect__img {  float: left;  margin-right: 10px;  flex: 1;}#viewport #view-container .disconnect .disconnect__msg {  padding-top: 2px;  color: #22455D;  font-weight: bold;  line-height: 20px;  font-size: 18px;  flex: 6;}#viewport #view-container .disconnect .disconnect__msg p {  padding: 10px 0;}#viewport #view-container .disconnect .disconnect__msg p:first-child {  padding-top: 0;}#viewport #view-container .disconnect .disconnect__msg--underline {  text-decoration: underline;}#viewport a {  text-decoration: none;  color: #21a2fc;  font-weight: bold;}#viewport p {  color: #556063;}#viewport .header {  color: #22455D;  margin: 0 0 8px 0;  font-weight: bold;  line-height: 20px;  font-size: 18px;}#viewport .header-light {  font-size: 20px;  padding-bottom: 10px;}#viewport button,#viewport input[type="submit"] {  position: relative;  background-color: #0e79c4;  fill: #469AD9;  color: white;  box-sizing: border-box;  width: 100%;  cursor: pointer;  border: 0;  border-radius: 3px;  margin: 5px 0;  font-weight: bold;  -moz-transition: background-color 0.2s ease-in-out 0s;  -o-transition: background-color 0.2s ease-in-out 0s;  -webkit-transition: background-color 0.2s ease-in-out;  -webkit-transition-delay: 0s;  transition: background-color 0.2s ease-in-out 0s;}#viewport button p,#viewport input[type="submit"] p {  font-size: 18px;  margin: 5px 0;  color: white;}#viewport button small,#viewport input[type="submit"] small {  font-weight: normal;  font-size: smaller;}#viewport button.btn-lg,#viewport input[type="submit"].btn-lg {  font-size: 16px;  padding: 15px;}#viewport button.btn-md,#viewport input[type="submit"].btn-md {  font-size: 12px;  padding: 12px;}#viewport button:hover,#viewport input[type="submit"]:hover {  background-color: #21a2fc;}#viewport button:hover .icon-chevron-right,#viewport input[type="submit"]:hover .icon-chevron-right {  margin-left: 8px;}#viewport form fieldset {  position: relative;  margin-bottom: 15px;  padding-right: 27px;  float: left;  width: 150px;}#viewport form label.placeholder-label {  z-index: 2;  position: absolute;  top: 17px;  left: 0;  color: #545f62;  font-size: 14px;  line-height: 1;  padding-left: 15px;  transition: all .2s ease;}#viewport form .styled-select {  position: relative;}#viewport form .styled-select select {  background-color: #f7f7f7;  font-size: 18px;  height: 50px;  width: 100%;  box-sizing: border-box;  padding-top: 10px;  padding-left: 13px;  border: 1px solid #ccc;  border-radius: 3px;  color: #082f4a;  cursor: pointer;}#viewport form .styled-select::after {  position: absolute;  top: 1px;  right: 0;  display: block;  content: "";  width: 45px;  height: 48px;  background-color: #f7f7f7;  background-repeat: no-repeat;  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAKCAMAAACzB5/1AAAAJ1BMVEWDl6SyvsYnSWHg5ehlfY6isbtGY3c2Vmzw8vQXPFXR2N0IL0r///+dn/JSAAAADXRSTlP///////////////8APegihgAAAEhJREFUeAFVykkOgFAIBFH0DwzU/c9r7JioteKRNn4Ze/FUuwzvQsWZwxiZJXkfGFR6ALMXN1m9wXoi6tRL1LA9XuI5+DAKdQGl8gWkMrEIZQAAAABJRU5ErkJggg==);  background-position: 14px 22px;  border-left: 1px solid #ccc;  border-right: 1px solid #ccc;  pointer-events: none;}#viewport form .invalid-message {  color: #fe5438;  visibility: none;  opacity: 0;  font-weight: bold;  font-size: 11px;  padding-top: 5px;  padding-left: 15px;  -moz-transition: opacity 0.2s ease-in-out 0s;  -o-transition: opacity 0.2s ease-in-out 0s;  -webkit-transition: opacity 0.2s ease-in-out;  -webkit-transition-delay: 0s;  transition: opacity 0.2s ease-in-out 0s;}#viewport form fieldset.focus label.placeholder-label,#viewport form fieldset.valid label.placeholder-label {  top: 7px;  font-size: 10px;  color: #000;}#viewport form fieldset.focus .styled-select select,#viewport form fieldset.valid .styled-select select {  background-color: #fff;}#viewport form fieldset.focus .styled-select::after,#viewport form fieldset.valid .styled-select::after {  background-color: #fff;}#viewport form fieldset.invalid .styled-select select {  border-color: #fe5438;}#viewport form fieldset.invalid .styled-select::after {  border-color: #fe5438;}#viewport form fieldset.invalid select {  border-left-width: 5px;}#viewport form fieldset.invalid .invalid-message {  visibility: visible;  opacity: 1;}#viewport form.form-invalid .invalid-message {  text-align: right;  visibility: visible;  opacity: 1;}#viewport ul {  text-align: left;}#viewport ul li button {  text-align: inherit;}#viewport ul li button .icon-chevron-right {  position: absolute;  right: 16px;  top: 8px;}';
});
define('Automatons/styles/68', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {  }#viewport .outcome {  margin: 14px;  color: #000000;  font-family: Arial;  font-size: 12px;  font-weight: bold;}#viewport .heading h1 {  position: absolute;  color: #000000;  font-family: Arial;  font-size: 14px;  top: 15px;  right: 15px;  left: 15px;}#viewport .link_class {  cursor: pointer;  float: left;  margin-top: 65px;  color: #000000;  font-family: Arial;  font-size: 14px;}#viewport .link_class ul {  list-style-type: none;}#viewport .link_class li {  background-image: url("https://mediav3.inq.com/media/sites/312/flash/Comast-Common-Assets/Images/ArrowLI.png");  background-position: 0px 5px;  background-repeat: no-repeat;  background-size: 16px auto;  height: 22px;  margin-top: 8px;  padding-left: 29px;  padding-top: 3px;}#viewport .link_class li:hover {  color: #1471DA;}#viewport .link_class button {  background-color: transparent;  border: none;  font-size: 14px;  padding: 0;  cursor: pointer;}#viewport .link_class button:hover {  color: #1471DA;}';
});
define("Automatons/templates/16", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"list-view\">    <div class=\"heading\">                 <h1><%= heading %></h1>      </div>    <div  class=\"link_class\">         <ul>            <% _.each(links, function(link) { %>                <li acif-node=\"<%= link.id %>\" acif-node-name=\"<%= link.name %>\"><%= link.button %></li>            <% }); %>        </ul>    </div>      </div>";
});
define("Automatons/templates/17", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-view\">        <div class=\"outcome\">        <p><%= heading %></p>           </div>   </div><% \tsetTimeout(function() {         top.Inq.fireCustomEvent('guideSuppressChat');\t\t}, 0);%>";
});
define("Automatons/templates/18", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<% \tsetTimeout(function() {         top.Inq.fireCustomEvent('guideSuppressChat');\t\ttop.inqFrame.Inq.FlashPeer.ciActionBtnCloseChat();\t\t}, 0);\tconsole.debug('Guide close');%>";
});
define("Automatons/templates/19", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<% \tconsole.log('Got Here');    top.inqFrame.Application.ResizeStage(373,408);%><div class=\"list-view\">    <div class=\"heading\">                 <h1><%= heading %></h1>             <ul class=\"link_class\">    \t<% _.each(links, function(link) { %>        \t<li acif-node=\"<%= link.id %>\" acif-node-name=\"<%= link.name %>\" <%= link.tooltip ? 'title=\"' + link.tooltip + '\"' : \"\" %>><%= link.button %></li>    \t<% }); %>    </ul>    </div></div>";
});
define("Automatons/templates/2001", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<span class=\"icon-chevron-right\">  <svg width=\"24\" height=\"24\" xmlns=\"http://www.w3.org/2000/svg\">  <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->  <g>    <title>background</title>    <rect fill=\"none\" id=\"canvas_background\" height=\"26\" width=\"26\" y=\"-1\" x=\"-1\"/>    <g display=\"none\" overflow=\"visible\" y=\"0\" x=\"0\" height=\"100%\" width=\"100%\" id=\"canvasGrid\">    <rect fill=\"url(#gridpattern)\" stroke-width=\"0\" y=\"0\" x=\"0\" height=\"100%\" width=\"100%\"/>    </g>  </g>  <g>    <title>Layer 1</title>    <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->    <g stroke=\"null\" id=\"svg_51\">    <g stroke=\"null\" transform=\"matrix(0.41676677530316825,0,0,0.41676677530316825,175.541182526051,103.96663322593282) \" id=\"svg_48\">      <title stroke=\"null\" transform=\"translate(-33.591896057128906,-4.798842430114746) translate(35.19151306152344,6.398457050323486) translate(-42.50520706176758,-4.250520706176758) translate(1.4168401956558228,2.842170943040401e-14) translate(38.25468444824219,2.842170943040401e-14) translate(0,2.1252622604370117) translate(0,-2.1252622604370117) translate(-2.1252622604370117,2.842170943040401e-14) translate(2.1252622604370117,-2.1252622604370117) translate(14.876835823059082,38.25471878051758) translate(-14.876835823059082,-36.12945556640625) translate(4.250524520874023,2.1252622604370117) translate(-2.1252622604370117,2.842170943040401e-14) translate(-518.56396484375,-329.4156494140625) translate(66.94313049316406,67.57466888427734) translate(28.72499656677246,0) translate(0,10.49999713897705) \">background</title>      <rect stroke=\"null\" x=\"-423.004641\" y=\"-252.866626\" width=\"62\" height=\"62\" id=\"svg_46\" fill=\"none\"/>      <g stroke=\"null\" id=\"svg_45\" display=\"none\">      <rect stroke=\"null\" id=\"svg_49\" width=\"580\" height=\"400\" x=\"-422.004641\" y=\"-251.866626\" stroke-width=\"0\" fill=\"url(#gridpattern)\"/>      </g>    </g>    <g stroke=\"null\" transform=\"matrix(0.41676677530316825,0,0,0.41676677530316825,175.541182526051,103.96663322593282) \" id=\"svg_50\">      <title stroke=\"null\" transform=\"translate(-33.591896057128906,-4.798842430114746) translate(35.19151306152344,6.398457050323486) translate(-42.50520706176758,-4.250520706176758) translate(1.4168401956558228,2.842170943040401e-14) translate(38.25468444824219,2.842170943040401e-14) translate(0,2.1252622604370117) translate(0,-2.1252622604370117) translate(-2.1252622604370117,2.842170943040401e-14) translate(2.1252622604370117,-2.1252622604370117) translate(14.876835823059082,38.25471878051758) translate(-14.876835823059082,-36.12945556640625) translate(4.250524520874023,2.1252622604370117) translate(-2.1252622604370117,2.842170943040401e-14) translate(-518.56396484375,-329.4156494140625) translate(66.94313049316406,67.57466888427734) translate(28.72499656677246,0) translate(0,10.49999713897705) \">Layer 1</title>      <ellipse stroke=\"#469ad9\" fill=\"#469ad9\" stroke-width=\"1.5\" cx=\"-391.004641\" cy=\"-220.866626\" id=\"svg_44\" rx=\"24\" ry=\"24\"/>      <g stroke=\"null\" id=\"svg_25\">      <g stroke=\"null\" id=\"svg_41\" transform=\"matrix(0.1538203850901568,0,0,0.1538203850901568,-360.25919601040204,-393.2201897820839) \">        <g stroke=\"null\" id=\"svg_42\">        <path stroke=\"null\" d=\"m-227.097629,1215.3097c-2.741,0 -5.493,-1.044 -7.593,-3.149c-4.194,-4.194 -4.194,-10.981 0,-15.175l74.352,-74.347l-74.352,-74.352c-4.194,-4.194 -4.194,-10.987 0,-15.175c4.194,-4.194 10.987,-4.194 15.18,0l81.934,81.934c4.194,4.194 4.194,10.987 0,15.175l-81.934,81.939c-2.093,2.1 -4.84,3.15 -7.587,3.15z\" fill=\"#FFFFFF\" id=\"svg_43\"/>        </g>      </g>      <g stroke=\"null\" id=\"svg_40\" transform=\"matrix(0.1538203850901568,0,0,0.1538203850901568,-360.25919601040204,-393.2201897820839) \"/>      <g stroke=\"null\" id=\"svg_39\" transform=\"matrix(0.1538203850901568,0,0,0.1538203850901568,-360.25919601040204,-393.2201897820839) \"/>      <g stroke=\"null\" id=\"svg_38\" transform=\"matrix(0.1538203850901568,0,0,0.1538203850901568,-360.25919601040204,-393.2201897820839) \"/>      <g stroke=\"null\" id=\"svg_37\" transform=\"matrix(0.1538203850901568,0,0,0.1538203850901568,-360.25919601040204,-393.2201897820839) \"/>      <g stroke=\"null\" id=\"svg_36\" transform=\"matrix(0.1538203850901568,0,0,0.1538203850901568,-360.25919601040204,-393.2201897820839) \"/>      <g stroke=\"null\" id=\"svg_35\" transform=\"matrix(0.1538203850901568,0,0,0.1538203850901568,-360.25919601040204,-393.2201897820839) \"/>      <g stroke=\"null\" id=\"svg_34\" transform=\"matrix(0.1538203850901568,0,0,0.1538203850901568,-360.25919601040204,-393.2201897820839) \"/>      <g stroke=\"null\" id=\"svg_33\" transform=\"matrix(0.1538203850901568,0,0,0.1538203850901568,-360.25919601040204,-393.2201897820839) \"/>      <g stroke=\"null\" id=\"svg_32\" transform=\"matrix(0.1538203850901568,0,0,0.1538203850901568,-360.25919601040204,-393.2201897820839) \"/>      <g stroke=\"null\" id=\"svg_31\" transform=\"matrix(0.1538203850901568,0,0,0.1538203850901568,-360.25919601040204,-393.2201897820839) \"/>      <g stroke=\"null\" id=\"svg_30\" transform=\"matrix(0.1538203850901568,0,0,0.1538203850901568,-360.25919601040204,-393.2201897820839) \"/>      <g stroke=\"null\" id=\"svg_29\" transform=\"matrix(0.1538203850901568,0,0,0.1538203850901568,-360.25919601040204,-393.2201897820839) \"/>      <g stroke=\"null\" id=\"svg_28\" transform=\"matrix(0.1538203850901568,0,0,0.1538203850901568,-360.25919601040204,-393.2201897820839) \"/>      <g stroke=\"null\" id=\"svg_27\" transform=\"matrix(0.1538203850901568,0,0,0.1538203850901568,-360.25919601040204,-393.2201897820839) \"/>      <g stroke=\"null\" id=\"svg_26\" transform=\"matrix(0.1538203850901568,0,0,0.1538203850901568,-360.25919601040204,-393.2201897820839) \"/>      </g>    </g>    </g>  </g>  </svg></span>";
});
define("Automatons/templates/2003", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<p class=\"header\">Chat is currently unavailable.</p><p>For immediate assistance please visit the <a href=\"#\" acif-node=\"node::2010\">Help&nbsp;and&nbsp;Support</a> page, or contact one of our representatives at (800) 391-3000 to assist you with your existing account.</p>";
});
define("Automatons/templates/2004", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<p>    This is an auto-generated email to inform you a respondent provided a \"[likely-to-recommend]\" rating on Likelihood to Recommend.    Please click on the following link <a href=\"https://portal.touchcommerce.com/portal/portal.jsp#transcript_312_engagementID:[engagement-id]:transcript\">here</a> to view the survey.</p><p>ChatID: [engagement-id]</p><p>AgentID: [agent-id]</p><p>Comments1: [why-recommend]</p><p>Comments2: [improve-chat-service]</p>";
});
define("Automatons/templates/2017", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<p class=\"header\">Please select your state so that we may serve you better.</p><form acif-next-transition=\"routeToChat\" novalidate>    <% if (window.top.digitalData.localization.hasOwnProperty('geo') && _.contains(state_hash, window.top.digitalData.localization.geo.slice(-2))) { %>    <fieldset name=\"State\" class=\"valid\" required>     <% } else { %>    <fieldset name=\"State\" required>    <% } %>        <label class=\"placeholder-label\">State</label>        <div class=\"styled-select\">            <select>                <option value=\"\"></option>                <% _.each(state_hash, function(state) {                    if (window.top.digitalData.localization.hasOwnProperty('geo') && window.top.digitalData.localization.geo.slice(-2) == state) { %>                        <option value=\"<%= state %>\" selected=\"selected\"><%= state %></option>                    <% } else { %>                        <option value=\"<%= state %>\"><%= state %></option>                <%                    }                   });                             %>            </select>        </div>        <p class=\"invalid-message\">Select State</p>    </fieldset>    <footer>        <input type=\"submit\" class=\"btn-lg\" value=\"START CHAT\"/>        <p class=\"invalid-message\">Please correct the errors.</p>    </footer></form>";
});
define("Automatons/templates/2018", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"thankYou\">    <div class=\"center-container\">        <p class=\"lead\">Your feedback has been submitted!</p>        <p>Thank you for your time and participation.</p>        <button acif-action=\"exit\">Close</button>    </div></div>";
});
define("Automatons/templates/2019", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<p class=\"header\">Please select why you would like to chat&nbsp;with&nbsp;us&nbsp;today.</p><ul>    <li><button class=\"btn-md\" acif-node=\"node::2003\"><span>Add a new service</span><span acif-template=\"template::2001\">Icon - Chevron Right</span></button></li>    <li><button class=\"btn-md\" acif-node=\"node::2019\"><span>Billing or service issues</span><span acif-template=\"template::2001\">Icon - Chevron Right</span></button></li>    <li><button class=\"btn-md\" acif-node=\"node::2040\"><span>Change existing services</span><span acif-template=\"template::2001\">Icon - Chevron Right</span></button></li></ul>";
});
define("Automatons/templates/2020", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<p class=\"header\">To chat with a representative, answer<br/> the question below.</p><p class=\"header\">Do you have existing service with Comcast&nbsp;Business?</p><button class=\"btn-lg\" acif-node=\"node::2003\">\t<p><span>NO</span> <span acif-template=\"template::2001\">Icon - Chevron Right</span></p>\t<small>I am not yet a customer with Comcast Business</small></button><button class=\"btn-lg\" acif-node=\"node::2002\">\t<p><span>YES</span> <span acif-template=\"template::2001\">Icon - Chevron Right</span></p>\t<small>I am an existing Comcast Business customer</small></button>";
});
define("Automatons/templates/2021", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<p class=\"header-light\">Have questions? We can help. To chat with an agent please tell us a bit more.</p><p class=\"header\">Do you have existing service with Comcast Business?</p><button class=\"btn-lg\" acif-node=\"node::2003\">\t<p><span>NO</span> <span acif-template=\"template::2001\">Icon - Chevron Right</span></p>\t<small>I am not yet a customer with Comcast Business</small></button><button class=\"btn-lg\" acif-node=\"node::2002\">\t<p><span>YES</span> <span acif-template=\"template::2001\">Icon - Chevron Right</span></p>\t<small>I am an existing Comcast Business customer</small></button>";
});
define("Automatons/templates/2022", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2023", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<p class=\"header\">Chat is unavailable in your area.</p><p>For immediate assistance please visit the <a href=\"#\" acif-node=\"node::2010\">Help&nbsp;and&nbsp;Support</a> page, or contact one of our representatives at (800) 391-3000 to assist you with your existing account.</p>";
});
define("Automatons/templates/2024", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<p>For immediate assistance please visit the <a href=\"#\" acif-node=\"node::2010\">Help&nbsp;and&nbsp;Support</a> page, or contact one of our representatives at (800) 391-3000 to assist you with your existing account.</p>";
});
define("Automatons/templates/2025", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<p class=\"header\">Please select why you would like to chat with us today.</p><form acif-next-transition=\"next\" novalidate>  <ul>      <li><button class=\"btn-md\" onclick=\"document.querySelector('input[name=\\'customerSelection\\']').value = 'Billing issue'\"><span>Billing issue</span><span acif-template=\"template::2001\">Icon - Chevron Right</span></button></li>      <li><button class=\"btn-md\" onclick=\"document.querySelector('input[name=\\'customerSelection\\']').value = 'Service issue'\"><span>Service issue</span><span acif-template=\"template::2001\">Icon - Chevron Right</span></button></li>      <li><button class=\"btn-md\" onclick=\"document.querySelector('input[name=\\'customerSelection\\']').value = 'Add a new service'\"><span>Add a new service</span><span acif-template=\"template::2001\">Icon - Chevron Right</span></button></li>      <li><button class=\"btn-md\" onclick=\"document.querySelector('input[name=\\'customerSelection\\']').value = 'Change existing service'\"><span>Change existing service</span><span acif-template=\"template::2001\">Icon - Chevron Right</span></button></li>      <li><button class=\"btn-md\" onclick=\"document.querySelector('input[name=\\'customerSelection\\']').value = 'Renew or disconnect service'\"><span>Renew or disconnect service</span><span acif-template=\"template::2001\">Icon - Chevron Right</span></button></li>  </ul>  <input type=\"hidden\" name=\"customerSelection\" value=\"clear\"/></form>";
});
define("Automatons/templates/2026", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<!--  WEST      ['AZ','CA','CO','MN','MO','NM','OR','UT','TX','WA','WI','KS']  CENTRAL   ['IN','IL','MI','AL','AR','FL','GA','KY','LA','TN','AK','MS','SC']  NORTHEAST ['MD','OH','PA','WV','VA','DC','DE','VT','CT','MA','ME','NH','NJ','NY','NC','RI']--><p class=\"header\">Chat agents are currently offline.</p><br/><% if (window.top.digitalData.user[0].segment.hasOwnProperty('serviceState') &&['AZ','CA','CO','MN','MO','NM','OR','UT','TX','WA','WI','KS'].indexOf(window.top.digitalData.user[0].segment.serviceState) >= 0) { %>    <p>Live chat is available Monday through Friday betweent 7am-7pm MST. While we are offline, please feel free to visit <a href=\"#\" acif-node=\"node::2010\">Help&nbsp;and&nbsp;Support</a>.</p><br/>    <p>For immediate assistance or call 1-800-391-3000 to speak with an agent.</p><% } else if (window.top.digitalData.user[0].segment.hasOwnProperty('serviceState') &&['IN','IL','MI','AL','AR','FL','GA','KY','LA','TN','AK','MS','SC'].indexOf(window.top.digitalData.user[0].segment.serviceState) >= 0){ %>  <p>Live chat is available Monday through Friday betweent 8am-7pm EST. While we are offline, please feel free to visit <a href=\"#\" acif-node=\"node::2010\">Help&nbsp;and&nbsp;Support</a>.</p><br/>  <p>For immediate assistance or call 1-800-391-3000 to speak with an agent.</p><% } else if (window.top.digitalData.user[0].segment.hasOwnProperty('serviceState') &&['MD','OH','PA','WV','VA','DC','DE','VT','CT','MA','ME','NH','NJ','NY','NC','RI'].indexOf(window.top.digitalData.user[0].segment.serviceState) >= 0){ %>  <p>Live chat is available Monday through Friday betweent 8am-5pm EST. While we are offline, please feel free to visit <a href=\"#\" acif-node=\"node::2010\">Help&nbsp;and&nbsp;Support</a>.</p><br/>  <p>For immediate assistance or call 1-800-391-3000 to speak with an agent.</p><% } else { %>  <p>Live chat is available Monday through Friday betweent 8am-5pm EST. While we are offline, please feel free to visit <a href=\"#\" acif-node=\"node::2010\">Help&nbsp;and&nbsp;Support</a>.</p><br/>  <p>For immediate assistance or call 1-800-391-3000 to speak with an agent.</p><% } %>";
});
define("Automatons/templates/2027", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<p class=\"header\">Chat is unavailable at the moment.</p><p>Please try back soon.</p>";
});
define("Automatons/templates/2028", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"disconnect\">  <div class=\"disconnect__img\">    <img src=\"https://static.inq.com/sites/312/assets/automatons/images/icon-phone.png\" alt=\"phone icon\">  </div>  <div class=\"disconnect__msg\">    <p>These issues are not currently supported over chat.</p>    <p>Please call <span class=\"disconnect__msg--underline\">800-391-3000</span> to speak to a specialist for assistance.</p>  </div></div>";
});
define("Automatons/templates/255", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"list-view\">    <div class=\"heading\">                 <h1><%= heading %></h1>      </div>    <div  class=\"link_class\">         <ul>            <% _.each(nodes, function(node) { %>                <li acif-node=\"<%= node.node_id %>\" acif-node-name=\"<%= node.name %>\"><%= node.button %></li>            <% }); %>        </ul>    </div>      </div>";
});
define("Automatons/templates/256", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"Outcome\">    <h1><%= heading %></h1>\t<p><%= message %></p></div>";
});
define("Automatons/templates/46", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"list-view\">    <div class=\"heading\">               <h1><%= heading %></h1>               <ul class=\"link_class\">        <% _.each(links, function(link) { %>            <span class=\"arrow\">            <li acif-node=\"<%= link.id %>\" acif-node-name=\"<%= link.name %>\" <%= link.tooltip ? 'title=\"' + link.tooltip + '\"' : \"\" %>>                <span><%= link.button %></span>                              </li></span>        <% }); %>    </ul>    </div>      </div>";
});
define("Automatons/templates/47", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div><h1><%= heading %></h1></div>";
});
define("Automatons/templates/formify-map", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {};
});
ACIF.onConfigsReady.resolve();
//# sourceMappingURL=acif-configs.map
