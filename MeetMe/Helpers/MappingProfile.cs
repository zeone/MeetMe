using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using BusinessLogic.DTO.Events;
using Models;

namespace MeetMe.Helpers
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            //CreateMap<Post, PostLiteViewModel>()
            //    .ForMember(m => m.CommentCount, opt => opt.MapFrom(m => m.Comments != null ? m.Comments.Count : 0));
            CreateMap<Event, EventViewDto>()
                .ForMember(r => r.UserLogo, opt => opt.MapFrom(w => w.Creator.UserLogo));
           
        }
    }
}
