using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;

namespace MeetMe.Helpers
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            //CreateMap<Post, PostLiteViewModel>()
            //    .ForMember(m => m.CommentCount, opt => opt.MapFrom(m => m.Comments != null ? m.Comments.Count : 0));
        }
    }
}
